import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logoSolo from "../../assets/VoxelForgeLogos/voxel-forge-logo-solo.svg";

export type LoaderProps = {
  onLoadingComplete: () => void;
};

export const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  const timeDoneRef = useRef(false);
  const loadDoneRef = useRef(false);
  const finishedRef = useRef(false);
  const barRef = useRef<HTMLDivElement | null>(null);

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

    // Intro animations
    const tl = gsap
      .timeline()
      .fromTo(
        ".loader-logo",
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        }
      )
      .fromTo(
        ".loader-text",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.8"
      );

    // Progress logic: time to 90%, then wait for real window load to finish to 100%
    const progressCounter = { value: 0 };
    const updateBar = () => {
      setProgress(Math.round(progressCounter.value));
      if (barRef.current) {
        gsap.set(barRef.current, { width: `${progressCounter.value}%` });
      }
    };

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const minDuration = prefersReduced ? 0.8 : 2.0; // seconds
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
          duration: prefersReduced ? 0.25 : 0.45,
          ease: "power2.out",
          onUpdate: updateBar,
          onComplete: () => {
            setExiting(true);
            // Give the fade-out a head start, then notify parent to reveal app
            setTimeout(() => onLoadingComplete(), 50);
          },
        });
      }
    }

    return () => {
      tl.kill();
      toNinety.kill();
      window.removeEventListener("load", onLoad);
      // Restore scroll settings
      htmlEl.style.scrollBehavior = prevBehavior || "smooth";
      htmlEl.style.overflow = "";
      bodyEl.style.overflow = "";
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={
        "loader-container fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#eeeeee] via-white to-gray-100 dark:from-[#313841] dark:via-[#3a4750] dark:to-[#313841] transition-opacity duration-2000 " +
        (exiting ? "opacity-0" : "opacity-100")
      }
      style={{ willChange: "opacity" }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ea9216]/20 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ea9216]/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logoSolo}
            alt="Voxel Forge"
            className="loader-logo w-32 h-32 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Company Name */}
        <div className="mb-8">
          <h1 className="loader-text text-4xl md:text-5xl font-bold text-gray-900 dark:text-white opacity-0 translate-y-4">
            <span className="text-[#ea9216]">Voxel</span> Forge
          </h1>
          <p className="loader-text text-lg text-gray-600 dark:text-gray-300 mt-2 opacity-0 translate-y-4">
            3D Printing Studio
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div
              ref={barRef}
              className="progress-bar h-full bg-gradient-to-r from-[#ea9216] to-[#d68614] rounded-full w-0 transition-all duration-300"
            ></div>
          </div>
          <div className="mt-4 text-2xl font-bold text-[#ea9216]">
            {progress}%
          </div>
        </div>

        {/* Loading Text */}
        <p className="loader-text text-gray-500 dark:text-gray-400 opacity-0 translate-y-4">
          Preparando una experiencia increíble...
        </p>
      </div>
    </div>
  );
};

export default Loader;
