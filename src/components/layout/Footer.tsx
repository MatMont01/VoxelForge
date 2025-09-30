import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO, BRAND_COLORS } from "../../constants";
import { formatWhatsAppUrl, formatEmail } from "../../utils/helpers";
import instagramLogo from "../../assets/SocialMediaLogo/instagram.png";
import tiktokLogo from "../../assets/SocialMediaLogo/tiktok.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#313841] to-gray-800 dark:from-[#313841] dark:via-[#3a4750] dark:to-[#313841] text-white dark:text-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.3'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='75' cy='75' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
                style={{
                  backgroundColor: BRAND_COLORS.primary,
                  color: BRAND_COLORS.secondary,
                }}
              >
                VF
              </div>
              <span className="text-xl font-bold text-white dark:text-gray-100">
                Voxel Forge
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Transformando ideas en realidad tangible mediante tecnología de
              impresión 3D de alta calidad.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Fundada en 2022 en Santa Cruz de la Sierra, Bolivia
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href={formatEmail(CONTACT_INFO.email)}
                className="flex items-center space-x-3 text-gray-300 dark:text-gray-400 hover:text-[#ea9216] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a
                href={formatWhatsAppUrl(
                  CONTACT_INFO.whatsapp,
                  "Hola, me interesa conocer más sobre sus servicios de impresión 3D"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 dark:text-gray-400 hover:text-[#ea9216] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{CONTACT_INFO.whatsapp}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
              Servicios
            </h3>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>• Impresión 3D a pedido</li>
              <li>• Diseños personalizados</li>
              <li>• Prototipos rápidos</li>
              <li>• Figuras y decoración</li>
              <li>• Piezas funcionales</li>
              <li>• Envíos a todo Bolivia</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
              Síguenos
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/voxelforge_scz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 dark:text-gray-400 hover:text-pink-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={instagramLogo}
                    alt="Instagram"
                    loading="lazy"
                    className="w-4 h-4"
                  />
                </div>
                <div>
                  <div className="font-medium">Instagram</div>
                  <div className="text-xs text-gray-400">@voxelforge_scz</div>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@voxelforge_scz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 dark:text-gray-400 hover:text-gray-200 transition-colors group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={tiktokLogo}
                    alt="TikTok"
                    loading="lazy"
                    className="w-4 h-4"
                  />
                </div>
                <div>
                  <div className="font-medium">TikTok</div>
                  <div className="text-xs text-gray-400">@voxelforge_scz</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 dark:border-gray-600/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                © {currentYear} Voxel Forge. Todos los derechos reservados.
              </p>
              <div className="w-2 h-2 bg-[#ea9216] rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 dark:text-gray-500 text-sm">
                Hecho con
              </span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span className="text-gray-400 dark:text-gray-500 text-sm">
                en Santa Cruz de la Sierra, Bolivia
              </span>
              <div className="w-6 h-4 rounded-sm overflow-hidden flex flex-col">
                <div className="h-1/3 bg-red-500"></div>
                <div className="h-1/3 bg-yellow-400"></div>
                <div className="h-1/3 bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
