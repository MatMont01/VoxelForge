import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logoSolo from "../../assets/VoxelForgeLogos/voxel-forge-logo-solo.svg";

export type LoaderProps = {
  onLoadingComplete: () => void;
};

export const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [exiting, setExiting] = useState(false);

  const timeDoneRef = useRef(false);
  const loadDoneRef = useRef(false);
  const finishedRef = useRef(false);
  const exitedRef = useRef(false);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const percentTextRef = useRef<HTMLDivElement | null>(null);
  const lastUiUpdateRef = useRef<number>(0);
  const onCompleteRef = useRef(onLoadingComplete);

  // Keep the latest callback without retriggering the heavy effect
  useEffect(() => {
    onCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);

  // Background visuals were removed; device heuristics no longer needed here.

  useEffect(() => {
    // Force start at top and lock scroll while loader is visible
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const prevBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    htmlEl.style.overflow = "hidden";
    bodyEl.style.overflow = "hidden";

    // Prevent double-run within same page session
    if (typeof window !== "undefined") {
      (window as any).__vf_loader_started = true;
    }

    // Intro animations (lighter to avoid jank)
    let breathTween: any;
    let tiltTween: any;

    const tl = gsap
      .timeline()
      .fromTo(
        ".loader-logo",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .fromTo(
        ".loader-text",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
        "-=0.4"
      );

    // Start breathing after the intro finishes to avoid scale conflicts
    tl.eventCallback("onComplete", () => {
      if (logoRef.current) {
        breathTween = gsap.to(logoRef.current, {
          scale: 1.04,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          transformOrigin: "50% 50%",
        });
      }
    });

    // Progress logic: time to 90%, then wait for real window load to finish to 100%
    const progressCounter = { value: 0 };
    const updateBar = () => {
      const now = performance.now();
      // Throttle UI updates (~40fps) to reduce main-thread pressure
      if (now - (lastUiUpdateRef.current || 0) < 24) return;
      lastUiUpdateRef.current = now;
      if (ringRef.current) {
        const deg = Math.max(0, Math.min(360, progressCounter.value * 3.6));
        const accent = "#ea9216";
        const track = "#e5e7eb"; // gray-200 light track
        const trackDark = "#374151"; // gray-700 dark track
        const isDark = document.documentElement.classList.contains("dark");
        const baseTrack = isDark ? trackDark : track;
        ringRef.current.style.background = `conic-gradient(${accent} 0deg ${deg}deg, ${baseTrack} ${deg}deg 360deg)`;
      }
      if (percentTextRef.current)
        percentTextRef.current.textContent = `${Math.round(
          progressCounter.value
        )}%`;
    };

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const minDuration = prefersReduced ? 0.8 : 2.0; // seconds to reach 90%
    const toNinety = gsap.to(progressCounter, {
      value: 90,
      duration: minDuration,
      ease: "power2.out",
      onUpdate: updateBar,
      onComplete: () => {
        timeDoneRef.current = true;
        maybeFinish();
      },
    });

    const onLoad = () => {
      loadDoneRef.current = true;
      maybeFinish();
    };
    window.addEventListener("load", onLoad, { once: true });
    if (document.readyState === "complete") {
      // In case load already fired
      loadDoneRef.current = true;
      maybeFinish();
    }

    function maybeFinish() {
      if (finishedRef.current) return;
      if (timeDoneRef.current && loadDoneRef.current) {
        finishedRef.current = true;
        gsap.to(progressCounter, {
          value: 100,
          duration: prefersReduced ? 0.5 : 1.2, // slow down the last 10%
          ease: "power2.out",
          onUpdate: updateBar,
          onComplete: () => {
            if (exitedRef.current) return; // already handled
            // Pulse glow on the ring and synchronize the app fade-in with this pulse
            if (ringRef.current) {
              const pulseTl = gsap.timeline();
              pulseTl
                .to(ringRef.current, {
                  boxShadow:
                    "0 0 24px rgba(234,146,22,0.6), inset 0 2px 8px rgba(0,0,0,0.4)",
                  scale: 1.03,
                  duration: 0.35,
                  ease: "power2.out",
                })
                .to(ringRef.current, {
                  boxShadow:
                    "0 0 12px rgba(234,146,22,0.25), inset 0 2px 6px rgba(0,0,0,0.35)",
                  scale: 1,
                  duration: 0.35,
                  ease: "power2.inOut",
                });
            }
            // Start app reveal now (synced) and fade loader concurrently
            onCompleteRef.current && onCompleteRef.current();
            setExiting(true);
            exitedRef.current = true;
          },
        });
      }
    }

    // Gentle 3D tilt animation on the ring+logo group (performance-friendly)
    if (groupRef.current) {
      tiltTween = gsap.fromTo(
        groupRef.current,
        { rotateX: -6, rotateY: 8, transformPerspective: 800 },
        {
          rotateX: 6,
          rotateY: -8,
          duration: 6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        }
      );
    }

    return () => {
      tl.kill();
      breathTween && breathTween.kill();
      tiltTween && tiltTween.kill();
      toNinety.kill();
      window.removeEventListener("load", onLoad);
      // Restore scroll settings
      htmlEl.style.scrollBehavior = prevBehavior || "smooth";
      htmlEl.style.overflow = "";
      bodyEl.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={
        "loader-container fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#eeeeee] via-white to-gray-100 dark:from-[#313841] dark:via-[#3a4750] dark:to-[#313841] transition-opacity duration-[1200ms] ease-out " +
        (exiting ? "opacity-0" : "opacity-100")
      }
      style={{
        willChange: "opacity",
        transition: "opacity 1200ms ease-out",
        contain: "layout paint style",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div className="text-center relative z-10 flex flex-col items-center">
        {/* 3D Progress Ring + Logo */}
        <div
          ref={groupRef}
          className="relative mb-8"
          style={{
            width: 176,
            height: 176,
            perspective: 800,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Glow backdrop (lightweight) */}
          <div
            className="absolute -inset-6 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(234,146,22,0.25), rgba(234,146,22,0))",
              filter: "saturate(110%)",
              transform: "translateZ(-1px)",
            }}
          />
          {/* Progress ring using conic-gradient */}
          <div
            ref={ringRef}
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(#ea9216 0deg, #e5e7eb 0deg 360deg)",
              boxShadow:
                "inset 0 2px 6px rgba(0,0,0,0.35), 0 0 12px rgba(234,146,22,0.25)",
              transform: "translateZ(0)",
              willChange: "background",
            }}
          />
          {/* Inner face for a bezel look */}
          <div
            className="absolute inset-2 rounded-full"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.65), rgba(200,200,200,0.35))",
              boxShadow: "inset 0 3px 6px rgba(0,0,0,0.15)",
              transform: "translateZ(0.5px)",
            }}
          />
          {/* Logo */}
          <div
            className="absolute inset-4 rounded-full flex items-center justify-center"
            style={{ transform: "translateZ(1px)" }}
          >
            <img
              ref={logoRef}
              src={logoSolo}
              alt="Voxel Forge"
              className="loader-logo w-28 h-28 object-contain"
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <h1
            className="loader-text text-3xl md:text-4xl font-bold text-gray-900 dark:text-white opacity-0 translate-y-4"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          >
            <span className="text-[#ea9216]">Voxel</span> Forge
          </h1>
          <p
            className="loader-text text-base md:text-lg text-gray-600 dark:text-gray-300 mt-2 opacity-0 translate-y-4"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          >
            3D Printing Studio
          </p>
        </div>

        {/* Percentage below ring */}
        <div
          ref={percentTextRef}
          className="mt-1 text-2xl font-bold text-[#ea9216]"
        >
          0%
        </div>

        {/* Loading Text */}
        <p className="loader-text text-gray-500 dark:text-gray-400 opacity-0 translate-y-4 mt-3">
          Preparando una experiencia increíble...
        </p>
      </div>
    </div>
  );
};

export default Loader;
