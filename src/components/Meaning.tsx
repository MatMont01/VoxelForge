import { Box, Flame, Sparkles } from "lucide-react";
import { meaning } from "../data/site";

const icons = [Box, Flame] as const;

export function Meaning() {
  return (
    <section id="meaning" data-stage className="meaning-stage chapter-section section-band text-white">
      <div className="chapter-inner mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#ffb25f]">Nombre</p>
            <h2 className="section-title">
              Voxel Forge une precisión digital y oficio de taller.
            </h2>
            <p className="section-copy text-white/68">
              El nombre resume lo que hacemos: entender la geometría de una idea
              y forjarla capa por capa hasta que exista en el mundo físico.
            </p>
          </div>

          <div className="meaning-equation" aria-label="Voxel mas Forge">
            <span>Voxel</span>
            <Sparkles className="h-6 w-6 text-[#ffb25f]" />
            <span>Forge</span>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {meaning.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.term} className="meaning-panel">
                <div className="meaning-icon">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-display text-4xl text-[#ffb25f]">
                  {item.term}
                </p>
                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/66">{item.text}</p>
                <p className="mt-6 text-sm font-bold uppercase text-[#82e6c9]">
                  {item.signature}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
