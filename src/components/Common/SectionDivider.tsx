import React from 'react';

interface SectionDividerProps {
  title: string;
  badge?: string;
  subtitle?: string;
}

const cleanSectionName = (text: string) => {
  return text
    .replace(/^\/\/\s*/, '')
    .replace(/^\d+\.\s*/, '')
    .trim()
    .toUpperCase();
};

export const SectionDivider: React.FC<SectionDividerProps> = ({ title, badge, subtitle }) => {
  const sectionName = cleanSectionName(badge || title);

  return (
    <div className="w-full flex flex-col items-center justify-center text-center mt-14 sm:mt-20 lg:mt-24 mb-10 sm:mb-14 lg:mb-16 max-w-5xl mx-auto px-4 select-none">
      <div className="w-full flex items-center justify-center gap-4 sm:gap-6 my-2">
        <div className="h-[1px] flex-1 bg-[#BFB195] dark:bg-[#1E3A4B] transition-colors duration-300" />
        <h2 className="text-1.75rem sm:text-2rem lg:text-2.5rem font-[900] tracking-[0.08em] pl-[0.08em] text-[#1F1B17] dark:text-[#F9FBFA] uppercase font-['Roboto',sans-serif] shrink-0 transition-colors duration-300">
          {sectionName}
        </h2>
        <div className="h-[1px] flex-1 bg-[#BFB195] dark:bg-[#1E3A4B] transition-colors duration-300" />
      </div>

      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base text-[#5E5547] dark:text-[#889397] font-['Roboto',sans-serif] max-w-xl leading-[1.6] text-center mx-auto transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};
