import { useEffect } from "react";
import { isLowEndDevice } from "../utils/perf";

/**
 * Lightweight parallax hook: applies a translateY based on scroll position.
 * Uses rAF + passive listeners and avoids re-renders by mutating style directly.
 */
export const useParallax = (
  ref: React.RefObject<HTMLElement | null>,
  speed: number = 0.12
) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lowEnd = isLowEndDevice();
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (lowEnd || prefersReducedMotion) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const delta = elementCenter - viewportCenter;
      const translateY = -delta * speed;
      el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      el.style.willChange = "transform";
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      el.style.transform = "";
      el.style.willChange = "";
    };
  }, [ref, speed]);
};
