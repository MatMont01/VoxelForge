import { useEffect, useRef, useState } from "react";
import type { ForgeMode } from "../components/ForgeScene";

const stageModes: Record<string, ForgeMode> = {
  home: "collectible",
  story: "prototype",
  meaning: "collectible",
  services: "event",
  process: "prototype",
  portfolio: "collectible",
  materials: "prototype",
  equipment: "event",
  about: "collectible",
  faq: "prototype",
  contact: "event",
};

const stageLabels: Record<string, string> = {
  home: "Encendido",
  story: "Chispa digital",
  meaning: "Nombre y oficio",
  services: "Mesa de trabajo",
  process: "Laminado",
  portfolio: "Piezas forjadas",
  materials: "Filamentos",
  equipment: "Cámara P1S",
  about: "Origen",
  faq: "Preguntas",
  contact: "Entrega",
};

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function useImmersiveScroll() {
  const [mode, setMode] = useState<ForgeMode>("collectible");
  const [chapter, setChapter] = useState(stageLabels.home);
  const activeStage = useRef("home");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const root = document.documentElement;
      const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
      root.style.setProperty(
        "--page-progress",
        clamp(window.scrollY / maxScroll).toFixed(4)
      );

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-stage]")
      );
      const viewportCenter = window.innerHeight * 0.52;
      let current = sections[0];
      let closest = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height * 0.5;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closest) {
          closest = distance;
          current = section;
        }
      });

      if (!current) return;

      const rect = current.getBoundingClientRect();
      const sectionProgress = clamp(
        (viewportCenter - rect.top) / Math.max(1, rect.height)
      );
      const stageId = current.id || "home";

      root.style.setProperty("--stage-progress", sectionProgress.toFixed(4));
      root.style.setProperty("--stage-index", String(sections.indexOf(current)));

      if (stageId !== activeStage.current) {
        activeStage.current = stageId;
        setMode(stageModes[stageId] ?? "collectible");
        setChapter(stageLabels[stageId] ?? "Forja activa");
      }
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return { mode, chapter };
}
