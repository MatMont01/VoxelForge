import { useMemo, useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { business, materials, services } from "../data/site";
import { mailtoUrl, whatsappUrl } from "../utils/links";

export function Contact() {
  const [service, setService] = useState<string>(services[0].title);
  const [material, setMaterial] = useState<string>(materials[0].name);
  const [details, setDetails] = useState("");

  const message = useMemo(() => {
    const base = [
      "Hola Voxel Forge, quiero cotizar una impresión 3D.",
      `Servicio: ${service}.`,
      `Material de interés: ${material}.`,
    ];
    if (details.trim()) base.push(`Detalle: ${details.trim()}`);
    return base.join(" ");
  }, [details, material, service]);

  return (
    <section id="contact" data-stage className="contact-stage chapter-section section-band text-white">
      <div className="chapter-inner mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-[#ffb25f]">Contacto</p>
            <h2 className="section-title">Tu siguiente pieza empieza con un mensaje.</h2>
            <p className="section-copy text-white/68">
              Envía archivo, foto, enlace o una descripción. Si todavía no sabes
              el material ideal, te ayudamos a elegirlo.
            </p>

            <div className="mt-9 grid gap-3">
              <a
                href={whatsappUrl("Hola, quiero cotizar una impresión 3D.")}
                target="_blank"
                rel="noreferrer"
                className="contact-row"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                <span>
                  <strong>WhatsApp</strong>
                  <small>{business.whatsappDisplay}</small>
                </span>
              </a>
              <a
                href={mailtoUrl("Consulta impresión 3D")}
                className="contact-row"
              >
                <Mail className="h-5 w-5 text-[#ffb25f]" />
                <span>
                  <strong>Email</strong>
                  <small>{business.email}</small>
                </span>
              </a>
              <div className="contact-row">
                <MapPin className="h-5 w-5 text-[#8fb8ff]" />
                <span>
                  <strong>Ubicación</strong>
                  <small>{business.location}</small>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5 sm:p-6">
            <h3 className="text-2xl font-bold">Cotizador rápido</h3>

            <div className="mt-6 grid gap-5">
              <fieldset>
                <legend className="mb-2 text-sm font-bold text-white/70">
                  Tipo de proyecto
                </legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {services.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => setService(item.title)}
                      className={`rounded-md border px-3 py-2 text-left text-sm font-bold transition ${
                        service === item.title
                          ? "border-[#ff7a2f] bg-[#ff7a2f] text-[#111114]"
                          : "border-white/12 bg-white/[0.035] text-white/76 hover:bg-white/10"
                      }`}
                      type="button"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="grid gap-2 text-sm font-bold text-white/70">
                Material sugerido
                <select
                  value={material}
                  onChange={(event) => setMaterial(event.target.value)}
                  className="rounded-md border border-white/12 bg-[#191b20] px-3 py-3 text-white outline-none focus:border-[#ffb25f]"
                >
                  {materials.map((item) => (
                    <option key={item.name}>{item.name}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold text-white/70">
                Detalles
                <textarea
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  rows={4}
                  className="resize-none rounded-md border border-white/12 bg-[#191b20] px-3 py-3 text-white outline-none focus:border-[#ffb25f]"
                  placeholder="Ej: tengo STL, tamaño aproximado 15 cm, color negro..."
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl(message)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#ff7a2f] px-4 py-3 font-bold text-[#111114] transition hover:bg-[#ffb25f]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enviar a WhatsApp
                </a>
                <a
                  href={mailtoUrl("Cotización impresión 3D", message)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/14 bg-white/8 px-4 py-3 font-bold text-white transition hover:bg-white/14"
                >
                  <Send className="h-5 w-5" />
                  Enviar por email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
