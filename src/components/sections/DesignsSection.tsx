import { useRef } from "react";
import {
  ExternalLink,
  Palette,
  Download,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { DESIGN_WEBSITES } from "../../constants";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "free":
      return <Star className="w-4 h-4 text-green-500" />;
    case "paid":
      return <Download className="w-4 h-4 text-blue-500" />;
    case "mixed":
      return <Palette className="w-4 h-4 text-purple-500" />;
    default:
      return <ExternalLink className="w-4 h-4" />;
  }
};

export const DesignsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section
      ref={sectionRef}
      id="designs"
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#2b323b] dark:via-[#2a2f38] dark:to-[#2b323b]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-gray-50/80 via-white/40 to-gray-100/80 dark:from-[#3a4750]/80 dark:via-[#313841]/40 dark:to-[#3a4750]/80 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-gray-700/30 shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/20 border border-purple-500/20 mb-4">
                <Palette className="w-4 h-4 text-purple-500 mr-2" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Recursos Recomendados
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                ¿No sabes qué{" "}
                <span className="bg-gradient-to-r from-[#ea9216] to-[#d68614] bg-clip-text text-transparent">
                  imprimir?
                </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Descubre miles de diseños listos para imprimir en plataformas
                confiables. Elige la que más te guste y descarga tus modelos.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {DESIGN_WEBSITES.map((website, index) => (
                <motion.a
                  key={website.name}
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/70 dark:bg-[#313841]/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-gray-700/30 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ea9216]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(website.category)}
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-[#ea9216] transition-colors duration-300">
                          {website.name}
                        </h4>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#ea9216] group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {website.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          website.category === "free"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                            : website.category === "mixed"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                        }`}
                      >
                        {website.category === "free"
                          ? "Gratis"
                          : website.category === "mixed"
                          ? "Gratis y Premium"
                          : "Premium"}
                      </span>
                      <span className="inline-flex items-center text-[#ea9216] font-semibold">
                        Ver diseños
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                  {/* Shine */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
