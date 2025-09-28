import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Elegant fade animations with more drama
export const fadeInUp = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      y: 120,
      opacity: 0,
      scale: 0.9,
      rotationX: 25,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 1.8,
      delay,
      ease: "power3.out",
    }
  );
};

export const fadeInLeft = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      x: -150,
      opacity: 0,
      rotationY: -20,
      skewX: 15,
    },
    {
      x: 0,
      opacity: 1,
      rotationY: 0,
      skewX: 0,
      duration: 2,
      delay,
      ease: "power4.out",
    }
  );
};

export const fadeInRight = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      x: 150,
      opacity: 0,
      rotationY: 20,
      skewX: -15,
    },
    {
      x: 0,
      opacity: 1,
      rotationY: 0,
      skewX: 0,
      duration: 2,
      delay,
      ease: "power4.out",
    }
  );
};

export const scaleIn = (element: HTMLElement | string, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      scale: 0.3,
      opacity: 0,
      rotation: -180,
    },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1.5,
      delay,
      ease: "elastic.out(1, 0.5)",
    }
  );
};

export const staggerCards = (
  elements: HTMLElement[] | string,
  delay = 0.15
) => {
  return gsap.fromTo(
    elements,
    {
      y: 80,
      opacity: 0,
      scale: 0.8,
      rotationX: 45,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 1.4,
      stagger: delay,
      ease: "power3.out",
    }
  );
};

// Advanced 3D printer-inspired animations
export const printerHeadAnimation = (element: HTMLElement | string) => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(element, {
    x: 30,
    duration: 2,
    ease: "power2.inOut",
  })
    .to(
      element,
      {
        y: -10,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=1"
    )
    .to(element, {
      x: -30,
      duration: 2,
      ease: "power2.inOut",
    })
    .to(
      element,
      {
        y: 10,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=1"
    );

  return tl;
};

export const layerBuildAnimation = (elements: HTMLElement[] | string) => {
  const tl = gsap.timeline();

  tl.from(elements, {
    scaleY: 0,
    transformOrigin: "bottom",
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  return tl;
};

export const extrusionAnimation = (element: HTMLElement | string) => {
  const tl = gsap.timeline({ repeat: -1 });

  tl.to(element, {
    scaleX: 1.1,
    scaleY: 0.9,
    duration: 0.5,
    ease: "power2.inOut",
  })
    .to(element, {
      scaleX: 0.9,
      scaleY: 1.1,
      duration: 0.5,
      ease: "power2.inOut",
    })
    .to(element, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });

  return tl;
};

// Magnetic hover effect
export const magneticHover = (element: HTMLElement, strength = 0.3) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

// Logo rotation animation
export const logoSpin = (element: HTMLElement | string, continuous = true) => {
  if (continuous) {
    return gsap.to(element, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  } else {
    return gsap.to(element, {
      rotation: 360,
      duration: 2,
      ease: "power2.out",
    });
  }
};

// Morphing background shapes
export const morphingBackground = (element: HTMLElement | string) => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(element, {
    borderRadius: "50% 20% 80% 30%",
    duration: 4,
    ease: "power2.inOut",
  })
    .to(element, {
      borderRadius: "30% 70% 40% 90%",
      duration: 4,
      ease: "power2.inOut",
    })
    .to(element, {
      borderRadius: "80% 30% 60% 40%",
      duration: 4,
      ease: "power2.inOut",
    });

  return tl;
};

// Text reveal animation
export const textReveal = (element: HTMLElement | string, delay = 0) => {
  const text =
    typeof element === "string" ? document.querySelector(element) : element;
  if (!text) return;

  const chars = text.textContent?.split("") || [];
  text.innerHTML = chars
    .map(
      (char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
    )
    .join("");

  return gsap.fromTo(
    text.children,
    {
      y: 100,
      opacity: 0,
      rotationX: -90,
    },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1.2,
      delay,
      stagger: 0.05,
      ease: "back.out(1.7)",
    }
  );
};

// Scroll-triggered animations
export const scrollTriggerAnimation = (
  element: HTMLElement | string,
  animation: () => void,
  triggerElement?: HTMLElement | string
) => {
  ScrollTrigger.create({
    trigger: triggerElement || element,
    start: "top 85%",
    onEnter: animation,
    once: true,
  });
};

export const parallaxEffect = (element: HTMLElement | string, speed = 0.5) => {
  gsap.to(element, {
    yPercent: -100 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Enhanced hover effects
export const hoverScale = (element: HTMLElement, scale = 1.08) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale,
      duration: 0.6,
      ease: "power2.out",
      transformOrigin: "center",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  });
};

// Logo breathing animation
export const breathingAnimation = (element: HTMLElement | string) => {
  return gsap.to(element, {
    scale: 1.05,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
  });
};

// 3D card flip
export const cardFlip = (element: HTMLElement) => {
  let isFlipped = false;

  element.addEventListener("click", () => {
    const rotation = isFlipped ? 0 : 180;
    gsap.to(element, {
      rotationY: rotation,
      duration: 0.8,
      ease: "power2.inOut",
    });
    isFlipped = !isFlipped;
  });
};

// Particle system animation
export const createParticles = (container: HTMLElement, count = 50) => {
  const particles: HTMLElement[] = [];

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: #ea9216;
      border-radius: 50%;
      pointer-events: none;
    `;

    container.appendChild(particle);
    particles.push(particle);

    // Random position
    gsap.set(particle, {
      x: Math.random() * container.offsetWidth,
      y: Math.random() * container.offsetHeight,
    });

    // Floating animation
    gsap.to(particle, {
      y: "-=100",
      opacity: 0,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      repeat: -1,
      ease: "power1.out",
    });
  }

  return particles;
};
