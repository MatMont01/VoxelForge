import { business } from "../data/site";

export const whatsappUrl = (message?: string) => {
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${business.whatsappNumber}${query}`;
};

export const mailtoUrl = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const suffix = params.toString() ? `?${params.toString()}` : "";
  return `mailto:${business.email}${suffix}`;
};

export const scrollToHash = (hash: string, behavior: ScrollBehavior = "smooth") => {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }
  const anchor = target.querySelector<HTMLElement>(".chapter-inner") ?? target;
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const offset = (header?.offsetHeight ?? 72) + 12;
  const top = anchor.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior });
};
