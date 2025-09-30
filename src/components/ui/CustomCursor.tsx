import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if it's a mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    if (isMobile) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
      });
      gsap.to(follower, {
        scale: 0.8,
        duration: 0.3,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.1,
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
      });
    };

    // Handle hover effects for interactive elements
    const handleHoverableElements = () => {
      const hoverableElements = document.querySelectorAll(
        'a, button, [data-cursor="pointer"]'
      );

      hoverableElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          gsap.to(cursor, {
            scale: 1.5,
            backgroundColor: "#ea9216",
            duration: 0.3,
          });
          gsap.to(follower, {
            scale: 1.5,
            borderColor: "#ea9216",
            duration: 0.3,
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(cursor, {
            scale: 1,
            backgroundColor: "#ea9216",
            duration: 0.3,
          });
          gsap.to(follower, {
            scale: 1,
            borderColor: "#ea9216",
            duration: 0.3,
          });
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Initial setup for hoverable elements
    handleHoverableElements();

    // Re-setup when DOM changes
    const observer = new MutationObserver(handleHoverableElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, []);

  // Check if it's a mobile device for conditional rendering
  const isMobile =
    typeof window !== "undefined" &&
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
      window.innerWidth < 768);

  if (isMobile || typeof document === "undefined") return null;

  return createPortal(
    <>
      <div
        ref={cursorRef}
        className="cursor-dot fixed top-0 left-0 w-3 h-3 bg-[#ea9216] rounded-full pointer-events-none shadow-lg"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0,
          scale: 0,
          zIndex: 2147483647, // ensure above any overlay/banners
        }}
      />
      <div
        ref={followerRef}
        className="cursor-follower fixed top-0 left-0 w-8 h-8 border-2 border-[#ea9216] rounded-full pointer-events-none opacity-60"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0,
          scale: 0,
          zIndex: 2147483646,
        }}
      />
    </>,
    document.body
  );
};

export default CustomCursor;
