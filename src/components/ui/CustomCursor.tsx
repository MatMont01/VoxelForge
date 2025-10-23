import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

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

    // Track current scales to compose transforms safely
    let cursorScale = 1;
    let followerScale = 1;

    const applyTransforms = () => {
      // Center with -50% offset and apply scale explicitly to avoid mixing
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(${cursorScale})`;
      follower.style.transform = `translate(${fx}px, ${fy}px) translate(-50%, -50%) scale(${followerScale})`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Move the small cursor immediately while keeping center + scale
      applyTransforms();
    };

    // Smoothly follow the cursor using requestAnimationFrame
    let rafId = 0;
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
    let fx = 0,
      fy = 0;
    const follow = () => {
      fx = lerp(fx, mouseX, 0.18);
      fy = lerp(fy, mouseY, 0.18);
      applyTransforms();
      rafId = requestAnimationFrame(follow);
    };
    rafId = requestAnimationFrame(follow);

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      follower.style.opacity = "0.6";
      cursorScale = 1;
      followerScale = 1;
      applyTransforms();
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      follower.style.opacity = "0";
      cursorScale = 0;
      followerScale = 0;
      applyTransforms();
    };

    const handleMouseDown = () => {
      cursorScale = 0.8;
      followerScale = 0.8;
      applyTransforms();
    };

    const handleMouseUp = () => {
      cursorScale = 1;
      followerScale = 1;
      applyTransforms();
    };

    // Handle hover effects for interactive elements
    const handleHoverableElements = () => {
      const hoverableElements = document.querySelectorAll(
        'a, button, [data-cursor="pointer"]'
      );

      hoverableElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          cursorScale = 1.5;
          followerScale = 1.5;
          cursor.style.backgroundColor = "#ea9216";
          (follower.style as any).borderColor = "#ea9216";
          applyTransforms();
        });

        element.addEventListener("mouseleave", () => {
          cursorScale = 1;
          followerScale = 1;
          cursor.style.backgroundColor = "#ea9216";
          (follower.style as any).borderColor = "#ea9216";
          applyTransforms();
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
      cancelAnimationFrame(rafId);
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
