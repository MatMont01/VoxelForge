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

export const scrollToSection = (sectionId: string) => {
  try {
    const id = sectionId.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      // Usar scrollIntoView con configuración más específica
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      // Intentar buscar por selector CSS si no encuentra por ID
      const elementBySelector = document.querySelector(sectionId);
      if (elementBySelector) {
        elementBySelector.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
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
