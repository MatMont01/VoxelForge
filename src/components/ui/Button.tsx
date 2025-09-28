import type { ButtonHTMLAttributes, ReactNode } from "react";
import { BRAND_COLORS } from "../../constants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#313841] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: `bg-[${BRAND_COLORS.primary}] hover:bg-[#d68614] text-white focus:ring-[${BRAND_COLORS.primary}]`,
    secondary: `bg-[${BRAND_COLORS.secondary}] hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-[${BRAND_COLORS.dark}] dark:text-white focus:ring-[${BRAND_COLORS.secondary}] dark:focus:ring-gray-500`,
    outline: `border-2 border-[${BRAND_COLORS.primary}] text-[${BRAND_COLORS.primary}] hover:bg-[${BRAND_COLORS.primary}] hover:text-white focus:ring-[${BRAND_COLORS.primary}]`,
    ghost: `text-[${BRAND_COLORS.dark}] dark:text-gray-300 hover:bg-[${BRAND_COLORS.secondary}] dark:hover:bg-gray-700 focus:ring-[${BRAND_COLORS.accent}] dark:focus:ring-gray-500`,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Cargando...
        </>
      ) : (
        children
      )}
    </button>
  );
};
