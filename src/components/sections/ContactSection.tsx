import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { CONTACT_INFO } from "../../constants";
import {
  formatWhatsAppUrl,
  formatEmail,
  validateEmail,
} from "../../utils/helpers";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/motion";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const sectionRef = useRef<HTMLElement>(null);
  // Replaced local variants with shared presets

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Crear el cuerpo del email con todos los datos del formulario
      const emailBody = `
Nuevo mensaje desde el formulario de contacto de VOXEL FORGE:

DATOS DEL CLIENTE:
- Nombre: ${formData.name}
- Email: ${formData.email}
- Asunto: ${formData.subject}

MENSAJE:
${formData.message}

---
Este mensaje fue enviado desde el formulario de contacto de voxelforge.com
      `.trim();

      // Crear la URL de mailto con todos los parámetros
      const mailtoUrl = `mailto:${
        CONTACT_INFO.email
      }?subject=${encodeURIComponent(
        `[VOXEL FORGE] ${formData.subject}`
      )}&body=${encodeURIComponent(emailBody)}`;

      // Abrir el cliente de correo del usuario
      window.location.href = mailtoUrl;

      // Mostrar mensaje de éxito después de un breve delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setIsSubmitting(false);
      // Aquí podrías mostrar un mensaje de error si es necesario
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: CONTACT_INFO.email,
      description: "Respuesta en 24 horas",
      action: () =>
        window.open(
          formatEmail(CONTACT_INFO.email, "Consulta sobre impresión 3D")
        ),
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: CONTACT_INFO.whatsapp,
      description: "Respuesta inmediata",
      action: () =>
        window.open(
          formatWhatsAppUrl(
            CONTACT_INFO.whatsapp,
            "Hola, me interesa conocer más sobre sus servicios de impresión 3D"
          ),
          "_blank"
        ),
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: CONTACT_INFO.location,
      description: "Envíos a todo Bolivia",
      action: () => {},
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 dark:from-[#2d1a00] dark:via-[#3d2500] dark:to-[#2d1a00] relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.2'%3E%3Cpath d='M75 75l8-8v16l-8-8zm-20 0l8 8h-16l8-8zm20-20l8-8v16l-8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Communication Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 w-10 h-10 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-36 right-24 w-6 h-6 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-24 w-14 h-14 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-8 h-8 bg-gradient-to-br from-yellow-500/15 to-orange-400/15 rounded-full animate-pulse"></div>
      </div>

      {/* Warm Ambient Light */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-orange-300/10 via-yellow-300/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20 mb-6">
            <Send className="w-4 h-4 text-[#ea9216] mr-2" />
            <span className="text-sm font-medium text-[#ea9216]">
              ¡Hablemos!
            </span>
          </div>

          <motion.h2
            variants={fadeInUp(0.1)}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Contáct
            </span>
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              anos
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp(0.2)}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            ¿Tienes un{" "}
            <span className="text-[#ea9216] font-semibold">
              proyecto en mente
            </span>
            ? Estamos aquí para ayudarte a{" "}
            <span className="text-[#ea9216] font-semibold">
              hacerlo realidad
            </span>
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.div
                  variants={fadeInUp(idx * 0.05)}
                  key={method.title}
                  className="contact-card bg-gray-50 dark:bg-[#3a4750] rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={method.action}
                >
                  <div className="w-16 h-16 bg-[#ea9216] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-[#ea9216] font-semibold mb-2">
                    {method.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {method.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <motion.form
              variants={fadeInUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-gray-50 dark:bg-[#3a4750] rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Envíanos un Mensaje
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
                  <div className="flex items-center text-green-700 dark:text-green-300">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-medium">
                      ¡Mensaje enviado correctamente!
                    </span>
                  </div>
                  <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                    Te responderemos pronto.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ea9216] focus:border-transparent transition-colors bg-white dark:bg-[#313841] text-gray-900 dark:text-white ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ea9216] focus:border-transparent transition-colors bg-white dark:bg-[#313841] text-gray-900 dark:text-white ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ea9216] focus:border-transparent transition-colors bg-white dark:bg-[#313841] text-gray-900 dark:text-white ${
                    errors.subject
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="¿En qué podemos ayudarte?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ea9216] focus:border-transparent transition-colors bg-white dark:bg-[#313841] text-gray-900 dark:text-white resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Cuéntanos sobre tu proyecto, qué quieres imprimir, materiales preferidos, etc."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                isLoading={isSubmitting}
                className="w-full"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>

              <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-4">
                * Campos obligatorios. También puedes contactarnos directamente
                por WhatsApp.
              </p>
            </motion.form>
          </div>

          {/* Service Areas */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Áreas de Servicio
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {CONTACT_INFO.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-[#ea9216]/10 text-[#ea9216] rounded-full text-sm font-medium border border-[#ea9216]/20"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
