import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const cleanSectionName = (text: string) => {
  return text
    .replace(/^\/\/\s*/, '')
    .replace(/^\d+\.\s*/, '')
    .trim()
    .toUpperCase();
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
}) => {
  const sectionName = cleanSectionName(badge);

  return (
    <div className="section-heading-wrap w-full flex flex-col items-center justify-center text-center mx-auto select-none">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-center gap-4 sm:gap-6 mt-[15px] mb-[15px]">
        {/* Left Line */}
        <div className="h-[1px] flex-1 bg-[#BFB195] dark:bg-[#1E3A4B] transition-colors duration-300" />

        {/* Title */}
        <h2 className="text-[1rem] sm:text-[1rem] lg:text-[1.5rem] leading-none font-[900] tracking-[0.08em] px-[0.04em] text-[#1F1B17] dark:text-[#F9FBFA] uppercase font-['Roboto',sans-serif] shrink-0 text-center transition-colors duration-300">
          {sectionName}
        </h2>

        {/* Right Line */}
        <div className="h-[1px] flex-1 bg-[#BFB195] dark:bg-[#1E3A4B] transition-colors duration-300" />
      </div>

      {title && (
        <h3 className="w-full text-center text-xl sm:text-2xl lg:text-[1rem] font-bold text-[#3D362D] dark:text-[#C1C7C6] font-['Roboto',sans-serif] tracking-tight leading-tight mt-[15px] mx-auto transition-colors duration-300">
          {title}{' '}
          {highlightText && (
            <span className="text-[#1F1B17] dark:text-[#F9FBFA] font-extrabold underline underline-offset-4 decoration-2 decoration-[#8C5E34] dark:decoration-[#00ED64] transition-colors duration-300">
              {highlightText}
            </span>
          )}
        </h3>
      )}

      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base text-[#5E5547] dark:text-[#889397] font-['Roboto',sans-serif] max-w-xl leading-[1.6] text-center mx-auto transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};