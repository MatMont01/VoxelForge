import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hasFine =
      typeof window !== "undefined" &&
      matchMedia("(any-pointer: fine)").matches;
    if (!hasFine) return;

    setEnabled(true);
    document.documentElement.setAttribute("data-cursor", "enabled");

    const onPointerMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      pos.current.x += dx * 0.18;
      pos.current.y += dy * 0.18;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    const onPointerDown = () => {
      if (followerRef.current)
        followerRef.current.style.transform += " scale(0.96)";
    };
    const onPointerUp = () => {
      if (!followerRef.current) return;
      followerRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    };
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.documentElement.removeAttribute("data-cursor");
    };
  }, [visible]);

  if (!enabled) return null;

  const baseOpacity = visible ? 1 : 0;

  return (
    <>
      <div
        ref={followerRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ea9216]/70 shadow-[0_0_20px_rgba(234,146,22,0.25)]"
        style={{
          width: 28,
          height: 28,
          opacity: baseOpacity,
          transition: "opacity 180ms ease-out",
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ea9216]"
        style={{
          width: 6,
          height: 6,
          opacity: baseOpacity,
          transition: "opacity 120ms ease-out",
        }}
      />
    </>
  );
};
