import { useEffect } from "react";

const visibleClass = "is-visible";
const readyClass = "reveal-ready";

function isInInitialViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.95;
}

export function useViewportReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    elements.forEach((element) => {
      if (isInInitialViewport(element)) {
        element.classList.add(visibleClass);
      }
    });

    document.documentElement.classList.add(readyClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    elements.forEach((element) => {
      if (!element.classList.contains(visibleClass)) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove(readyClass);
    };
  }, []);
}
