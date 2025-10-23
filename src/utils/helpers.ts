export const formatWhatsAppUrl = (
  phoneNumber: string,
  message?: string
): string => {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${cleanNumber}${
    message ? `?text=${encodedMessage}` : ""
  }`;
};

export const formatEmail = (
  email: string,
  subject?: string,
  body?: string
): string => {
  let mailto = `mailto:${email}`;
  const params = [];

  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);

  if (params.length > 0) {
    mailto += `?${params.join("&")}`;
  }

  return mailto;
};

const getFixedHeaderOffset = (): number => {
  try {
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>("header, [data-fixed-header]")
    );
    let maxOffset = 0;
    for (const el of candidates) {
      const style = window.getComputedStyle(el);
      if (style.position === "fixed") {
        const rect = el.getBoundingClientRect();
        // Consider headers fixed at the very top
        if (Math.abs(rect.top) <= 1) {
          maxOffset = Math.max(maxOffset, rect.height);
        }
      }
    }
    // Fallback sensible si no detecta header fijo
    return maxOffset || 72; // ~72px
  } catch {
    return 72;
  }
};

export const scrollToSection = (sectionId: string) => {
  try {
    const id = sectionId.replace("#", "");
    const el =
      document.getElementById(id) ||
      (document.querySelector(sectionId) as HTMLElement | null);

    if (!el) return;

    const headerOffset = getFixedHeaderOffset();
    const rect = el.getBoundingClientRect();
    const startY = window.scrollY || window.pageYOffset;
    const targetY = rect.top + startY - headerOffset - 8; // -8px acolchado

    // Scroll suave con window.scrollTo para evitar inconsistencias de scrollIntoView
    window.scrollTo({ top: targetY, behavior: "smooth" });

    // Reparador: si por cualquier razón el scroll se corta, reintenta una vez
    setTimeout(() => {
      const currentTop = el.getBoundingClientRect().top;
      // Si aún está lejos (> headerOffset/2), corrige el offset
      if (Math.abs(currentTop - headerOffset) > headerOffset / 2) {
        const newRect = el.getBoundingClientRect();
        const newTarget =
          newRect.top + (window.scrollY || 0) - headerOffset - 8;
        window.scrollTo({ top: newTarget, behavior: "smooth" });
      }
    }, 450);
  } catch (error) {
    console.error("Error al hacer scroll a la sección:", error);
  }
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
