import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Reveal } from "../Reveal";
import { business, createWhatsAppLink, materials, services } from "../../data/site";

type QuoteForm = {
  service: string;
  material: string;
  quantity: string;
  description: string;
};

const initialForm: QuoteForm = {
  service: services[0].title,
  material: materials[0].name,
  quantity: "1 pieza",
  description: "",
};

export function ContactSection() {
  const [form, setForm] = useState<QuoteForm>(initialForm);
  const [error, setError] = useState("");

  const quoteMessage = useMemo(() => {
    const detail = form.description.trim() || "Todavía quiero explicar los detalles.";
    return `Hola Voxel Forge, quiero cotizar ${form.service}. Material tentativo: ${form.material}. Cantidad: ${form.quantity}. Proyecto: ${detail}`;
  }, [form]);

  const quoteLink = createWhatsAppLink(quoteMessage);

  function updateField(field: keyof QuoteForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.description.trim().length < 8) {
      setError("Cuéntanos un poco más del proyecto para preparar una cotización útil.");
      return;
    }
    window.open(quoteLink, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <Reveal className="contact-copy">
          <p className="eyebrow">Cotizar</p>
          <h2 id="contact-title">Manda la idea. El taller se encarga de aterrizarla.</h2>
          <p>
            Si tienes STL, fotos, medidas o un enlace, envíalo por WhatsApp. Si
            solo tienes la idea, este formulario prepara un mensaje claro.
          </p>

          <div className="contact-methods" aria-label="Métodos de contacto">
            <a href={quoteLink}>
              <MessageCircle aria-hidden="true" size={19} />
              {business.whatsappDisplay}
            </a>
            <a href={`mailto:${business.email}`}>
              <Mail aria-hidden="true" size={19} />
              {business.email}
            </a>
            <span>
              <MapPin aria-hidden="true" size={19} />
              {business.location}
            </span>
            <span>
              <Phone aria-hidden="true" size={19} />
              Atención por agenda y WhatsApp
            </span>
          </div>
        </Reveal>

        <Reveal className="quote-panel" delay={0.08}>
          <form onSubmit={handleSubmit} noValidate>
            <label>
              Servicio
              <select
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
              >
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>

            <label>
              Material tentativo
              <select
                value={form.material}
                onChange={(event) => updateField("material", event.target.value)}
              >
                {materials.map((material) => (
                  <option key={material.name}>{material.name}</option>
                ))}
              </select>
            </label>

            <label>
              Cantidad
              <input
                value={form.quantity}
                onChange={(event) => updateField("quantity", event.target.value)}
                placeholder="Ej. 3 piezas, 20 llaveros, 1 prototipo"
              />
            </label>

            <label className="quote-panel__full">
              Proyecto
              <textarea
                value={form.description}
                onChange={(event) => updateField("description", event.target.value)}
                placeholder="Describe medidas, uso, color, urgencia o pega un enlace de referencia."
                rows={5}
                aria-describedby={error ? "quote-error" : undefined}
                aria-invalid={Boolean(error)}
              />
            </label>

            {error && (
              <p className="form-error" id="quote-error">
                {error}
              </p>
            )}

            <button className="button button--primary quote-panel__full" type="submit">
              <Send aria-hidden="true" size={18} />
              Preparar WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
