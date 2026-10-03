import React from 'react';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'w-9 h-9' }) => {
  return (
    <div
      className={`rounded-xl bg-[#1F1B17] dark:bg-[#0C2331] border border-[rgba(243,234,217,0.14)] dark:border-[#00ED64]/30 shadow-sm dark:shadow-[0_0_15px_rgba(0,237,100,0.15)] flex items-center justify-center shrink-0 select-none overflow-hidden transition-all duration-300 ${className}`}
      aria-label="Hossam Hassan Logo"
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Terminal chevron prompt (>) in MongoDB accent */}
        <path
          d="M 4.75 13.5 L 8.75 18 L 4.75 22.5"
          className="stroke-[#8C5E34] dark:stroke-[#00ED64] transition-colors duration-300"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* First H Initial */}
        <path
          d="M 12.25 12.5 V 23.5 M 12.25 18 H 17.75 M 17.75 12.5 V 23.5"
          className="stroke-[#F6EFE2] dark:stroke-[#F9FBFA] transition-colors duration-300"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Second H Initial */}
        <path
          d="M 21.25 12.5 V 23.5 M 21.25 18 H 26.75 M 26.75 12.5 V 23.5"
          className="stroke-[#F6EFE2] dark:stroke-[#F9FBFA] transition-colors duration-300"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Terminal cursor underscore (_) */}
        <line
          x1="28.75"
          y1="23.5"
          x2="31.25"
          y2="23.5"
          className="stroke-[#8C5E34] dark:stroke-[#00ED64] transition-colors duration-300"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
