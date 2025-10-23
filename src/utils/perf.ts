// Simple performance utilities to keep animations smooth on low-end devices
export const isLowEndDevice = () => {
  // Heuristic: low hardware concurrency or reduced motion preference
  const cores = (navigator as any).hardwareConcurrency || 2;
  const memory = (navigator as any).deviceMemory || 2;
  const prefersReducedMotion =
    matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  return cores <= 4 || memory <= 2 || prefersReducedMotion;
};
// Deprecated: GSAP removed. Keep only device heuristics.
