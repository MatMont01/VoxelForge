import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { gsap } from "gsap";
import { useTheme } from "../../hooks/useTheme";
import { NAVIGATION_ITEMS } from "../../constants";
// Removed page routing; we keep single-page anchor navigation
import { scrollToSection } from "../../utils/helpers";
import { magneticHover } from "../../utils/advancedAnimations";
import logoSolo from "../../assets/VoxelForgeLogos/voxel-forge-logo-solo.svg";
import instagramLogo from "../../assets/SocialMediaLogo/instagram.png";
import tiktokLogo from "../../assets/SocialMediaLogo/tiktok.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navItemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initial animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }

    // Logo hover animation
    if (logoRef.current) {
      magneticHover(logoRef.current, 0.15);
    }

    // Nav items hover animations
    navItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.set(item, { y: -20, opacity: 0 });
        gsap.to(item, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.8 + index * 0.1,
          ease: "power2.out",
        });

        // Hover effect
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            y: -2,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);

    // Add click animation
    gsap.to(headerRef.current, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  const handleThemeToggle = () => {
    // Simple and reliable theme toggle
    toggleDarkMode();

    // Add subtle animation feedback
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { scale: 1 },
        {
          scale: 1.02,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        }
      );
    }
  };
  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#313841]/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/30"
          : "bg-transparent"
      }`}
      style={{ transformStyle: "preserve-3d" }}
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
                ref={logoRef}
                src={logoSolo}
                alt="Voxel Forge Logo"
                className="w-12 h-12 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[#ea9216]/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#ea9216] transition-colors duration-300">
                Voxel Forge
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                3D Printing Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Existing in-page anchors */}
            {NAVIGATION_ITEMS.map((item, index) => (
              <button
                key={item.name}
                ref={(el) => {
                  navItemsRef.current[index] = el;
                }}
                onClick={() => handleNavClick(item.href)}
                className="relative text-gray-700 dark:text-gray-300 hover:text-[#ea9216] dark:hover:text-[#ea9216] transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ea9216] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
            {/* Removed extra page links to keep SPA behavior */}
          </nav>

          {/* Social Links & Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Social Links - Desktop only */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="https://www.instagram.com/voxelforge_scz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 hover:from-pink-200 hover:to-purple-200 dark:hover:from-pink-800/40 dark:hover:to-purple-800/40 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <img
                  src={instagramLogo}
                  alt="Instagram"
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://www.tiktok.com/@voxelforge_scz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
                aria-label="TikTok"
              >
                <img
                  src={tiktokLogo}
                  alt="TikTok"
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                />
              </a>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeToggle}
              className="relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group overflow-hidden"
              aria-label={
                darkMode ? "Activar modo claro" : "Activar modo oscuro"
              }
            >
              <div className="relative z-10">
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-600 dark:to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>

            {/* Mobile menu button */}
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
    </header>
  );
};
