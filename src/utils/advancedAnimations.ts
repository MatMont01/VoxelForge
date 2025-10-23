// GSAP-based advanced animations have been removed. This file now exports
// safe no-op shims to avoid breaking any stale imports.

export const fadeInUp = (_element?: any, _delay: number = 0) => undefined;
export const fadeInLeft = (_element?: any, _delay: number = 0) => undefined;
export const fadeInRight = (_element?: any, _delay: number = 0) => undefined;
export const scaleIn = (_element?: any, _delay: number = 0) => undefined;
export const staggerCards = (_elements?: any, _delay: number = 0.15) =>
  undefined;
export const printerHeadAnimation = (_element?: any) => undefined;
export const layerBuildAnimation = (_elements?: any) => undefined;
export const extrusionAnimation = (_element?: any) => undefined;
export const magneticHover = (_element?: any, _strength: number = 0.3) =>
  undefined;
export const logoSpin = (_element?: any, _continuous: boolean = true) =>
  undefined;
export const morphingBackground = (_element?: any) => undefined;
export const textReveal = (_element?: any, _delay: number = 0) => undefined;
export const scrollTriggerAnimation = (
  _element?: any,
  _animation?: () => void,
  _triggerElement?: any
) => undefined;
export const parallaxEffect = (_element?: any, _speed: number = 0.5) =>
  undefined;
export const hoverScale = (_element?: any, _scale: number = 1.08) => undefined;
export const breathingAnimation = (_element?: any) => undefined;
export const cardFlip = (_element?: any) => undefined;
export const createParticles = (_container?: any, _count: number = 50) =>
  undefined;
