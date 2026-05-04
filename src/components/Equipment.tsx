import { Cpu, Gauge, Layers, Wifi } from "lucide-react";
import { equipment } from "../data/site";

const specIcons = [Layers, Gauge, Gauge, Wifi] as const;

export function Equipment() {
  return (
    <section id="equipment" className="section-band bg-[#131820] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-[#8fb8ff]">Equipo</p>
            <h2 className="section-title">Bambu Lab P1S en el centro del taller.</h2>
            <p className="section-copy text-white/68">
              Velocidad, calibración y repetibilidad para que cada pieza salga
              con el nivel de detalle que necesita el proyecto.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {equipment.specs.map(([label, value], index) => {
                const Icon = specIcons[index];
                return (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                    <Icon className="mb-4 h-5 w-5 text-[#8fb8ff]" />
                    <p className="text-sm text-white/52">{label}</p>
                    <p className="mt-1 font-bold">{value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {equipment.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-sm text-white/72"
                >
                  <Cpu className="h-3.5 w-3.5 text-[#ffb25f]" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="printer-stage">
            <img
              src={equipment.image}
              alt="Impresora 3D Bambu Lab P1S usada por Voxel Forge"
              className="relative z-10 mx-auto w-full max-w-[560px] object-contain"
              width={760}
              height={760}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
