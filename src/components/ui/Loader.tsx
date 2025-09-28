import { useEffect, useState } from "react";
import { gsap } from "gsap";
import logoCircular from "../../assets/VoxelForgeLogos/voxel-forge-logo-circular.png";

interface LoaderProps {
  onLoadingComplete: () => void;
}

export const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onLoadingComplete, 500);
      },
    });

    // Logo animation
    tl.fromTo(
      ".loader-logo",
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      }
    )
      .to(".loader-logo", {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: 3,
        ease: "power2.inOut",
      })
      .to(
        ".progress-bar",
        {
          width: "100%",
          duration: 2,
          ease: "power2.out",
        },
        "-=2"
      )
      .to(
        ".loader-text",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=1.5"
      )
      .to(".loader-container", {
        scale: 1.2,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
      });

    // Progress counter
    const progressCounter = { value: 0 };
    gsap.to(progressCounter, {
      value: 100,
      duration: 3,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.round(progressCounter.value));
      },
    });
  }, [onLoadingComplete]);

  return (
    <div className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#eeeeee] via-white to-gray-100 dark:from-[#313841] dark:via-[#3a4750] dark:to-[#313841]">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ea9216]/20 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ea9216]/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logoCircular}
            alt="Voxel Forge"
            className="loader-logo w-32 h-32 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Company Name */}
        <div className="mb-8">
          <h1 className="loader-text text-4xl md:text-5xl font-bold text-gray-900 dark:text-white opacity-0 transform translate-y-4">
            <span className="text-[#ea9216]">Voxel</span> Forge
          </h1>
          <p className="loader-text text-lg text-gray-600 dark:text-gray-300 mt-2 opacity-0 transform translate-y-4">
            3D Printing Studio
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div className="progress-bar h-full bg-gradient-to-r from-[#ea9216] to-[#d68614] rounded-full w-0 transition-all duration-300"></div>
          </div>
          <div className="mt-4 text-2xl font-bold text-[#ea9216]">
            {progress}%
          </div>
        </div>

        {/* Loading Text */}
        <p className="loader-text text-gray-500 dark:text-gray-400 opacity-0 transform translate-y-4">
          Preparando experiencia increíble...
        </p>
      </div>
    </div>
  );
};
