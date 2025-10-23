// Legacy no-op shims: GSAP was removed in favor of Framer Motion and Tailwind.
// These helpers now do nothing and exist only to avoid breaking stale imports.

export const fadeInUp = (_element?: any, _delay: number = 0) => undefined;
export const fadeInLeft = (_element?: any, _delay: number = 0) => undefined;
export const fadeInRight = (_element?: any, _delay: number = 0) => undefined;
export const scaleIn = (_element?: any, _delay: number = 0) => undefined;
export const staggerCards = (_elements?: any, _delay: number = 0.1) =>
  undefined;
export const scrollTriggerAnimation = (
  _element?: any,
  _animation?: () => void,
  _triggerElement?: any
) => undefined;
export const parallaxEffect = (_element?: any, _speed: number = 0.5) =>
  undefined;
export const hoverScale = (_element?: HTMLElement) => undefined;
