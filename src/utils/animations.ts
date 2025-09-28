import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power2.out",
    }
  );
};

export const fadeInLeft = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power2.out",
    }
  );
};

export const fadeInRight = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power2.out",
    }
  );
};

export const scaleIn = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      delay,
      ease: "back.out(1.7)",
    }
  );
};

export const staggerCards = (elements: HTMLElement[] | string, delay = 0.1) => {
  return gsap.fromTo(
    elements,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: delay,
      ease: "power2.out",
    }
  );
};

export const scrollTriggerAnimation = (
  element: HTMLElement | string,
  animation: () => void,
  triggerElement?: HTMLElement | string
) => {
  ScrollTrigger.create({
    trigger: triggerElement || element,
    start: "top 80%",
    onEnter: animation,
    once: true,
  });
};

export const parallaxEffect = (element: HTMLElement | string, speed = 0.5) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const hoverScale = (element: HTMLElement) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
};
