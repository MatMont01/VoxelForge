import { HelpCircle } from "lucide-react";
import { faq } from "../data/site";

export function Faq() {
  return (
    <section id="faq" data-stage className="faq-stage chapter-section section-band text-white">
      <div className="chapter-inner mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow text-[#82e6c9]">FAQ</p>
            <h2 className="section-title">Preguntas antes de mandar a imprimir.</h2>
            <p className="section-copy text-white/68">
              Lo esencial para cotizar rápido: archivo, material, tiempos y
              envíos. Si el proyecto necesita más detalle, lo resolvemos por
              WhatsApp.
            </p>
          </div>

          <div className="grid gap-3">
            {faq.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>
                  <HelpCircle className="h-5 w-5 text-[#ffb25f]" />
                  <span>{item.question}</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
