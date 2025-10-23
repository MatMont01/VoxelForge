import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NAVIGATION_ITEMS } from "../../constants";
import { scrollToSection } from "../../utils/helpers";
import logoSolo from "../../assets/VoxelForgeLogos/voxel-forge-logo-solo.svg";
// Removed social icons from header to keep it focused on guidance/CTAs

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants for simple entrance and item stagger
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  } as const;

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };
  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#313841]/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/30"
          : "bg-transparent"
      }`}
      style={{ transformStyle: "preserve-3d" }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("#home")}
          >
            <div className="relative">
              <img
                src={logoSolo}
                alt="Voxel Forge Logo"
                className="w-12 h-12 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300"
                width={48}
                height={48}
                decoding="async"
              />
              <div className="absolute inset-0 bg-[#ea9216]/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-cunia text-gray-900 dark:text-white group-hover:text-[#ea9216] transition-colors duration-300">
                Voxel Forge
              </span>
              <span className="text-xs font-cunia text-gray-500 dark:text-gray-400 -mt-1">
                3D Printing Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Existing in-page anchors */}
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="relative text-gray-700 dark:text-gray-300 hover:text-[#ea9216] dark:hover:text-[#ea9216] transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
                variants={navVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.4 + index * 0.08,
                  duration: 0.35,
                  ease: "easeOut",
                }}
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ea9216] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            ))}
            {/* Removed extra page links to keep SPA behavior */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              className="md:hidden p-3 text-gray-700 dark:text-gray-300 hover:text-[#ea9216] transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : ""
                  }`}
                />
                <span
                  className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-3 bg-white/95 dark:bg-[#313841]/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-gray-200/20 dark:border-gray-700/30">
            {NAVIGATION_ITEMS.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#ea9216] hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-300 group"
                style={{
                  transform: `translateX(${isMenuOpen ? "0" : "-20px"})`,
                  opacity: isMenuOpen ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <span className="relative">
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea9216] group-hover:w-full transition-all duration-300" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};
