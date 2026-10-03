import React from 'react';

interface HeroTextProps {
  greetingRef: React.RefObject<HTMLDivElement | null>;
  nameRef: React.RefObject<HTMLHeadingElement | null>;
  subtitleRef: React.RefObject<HTMLHeadingElement | null>;
  taglineRef: React.RefObject<HTMLParagraphElement | null>;
}

export const HeroText: React.FC<HeroTextProps> = ({
  greetingRef,
  nameRef,
  subtitleRef,
  taglineRef,
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 z-10 w-full select-none">
      {/* 1. Greeting Badge: Hello, I'm */}
      <div
        ref={greetingRef}
        className="inline-flex items-center justify-center px-5 py-2 text-[#121A26] dark:text-[#00ED64] font-mono text-[12px] sm:text-[13px] tracking-[0.18em] uppercase font-bold leading-[1.4] mt-6 mb-6 mx-auto transition-colors duration-300"
      >
        <span>Hello, I'm</span>
      </div>

      {/* 2. Dominant Name: HOSSAM HASSAN */}
      <h1
        ref={nameRef}
        className="text-3xl min-[360px]:text-4xl min-[420px]:text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl font-black tracking-tight font-['Outfit',sans-serif] uppercase leading-[1.06] mb-3 sm:mb-4 select-none text-[#1F1B17] dark:text-[#F9FBFA] transition-colors duration-300"
      >
        <span>HOSSAM </span>
        <span className="bg-gradient-to-r from-[#1F1B17] to-[#8C5E34] dark:from-[#F9FBFA] dark:to-[#00ED64] bg-clip-text text-transparent">
          HASSAN
        </span>
      </h1>

      {/* 3. Specialty Subtitle: Full Stack Developer */}
      <h2
        ref={subtitleRef}
        className="text-sm min-[360px]:text-base min-[420px]:text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-[#1F1B17] dark:text-[#F9FBFA] font-['Outfit',sans-serif] flex flex-wrap items-center justify-center gap-2 transition-colors duration-300"
      >
        <span>Full Stack Developer</span>
        <span className="text-[#8C5E34] dark:text-[#00ED64] font-bold hidden min-[400px]:inline">•</span>
        <span className="text-[#3D362D] dark:text-[#C1C7C6]">
          MERN Stack Specialist
        </span>
      </h2>

      {/* 4. Concise tagline */}
      <p
        ref={taglineRef}
        className="mt-3 text-xs sm:text-sm text-[#5E5547] dark:text-[#889397] max-w-lg mx-auto leading-relaxed font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300"
      >
        Crafting scalable web applications, fluid user interfaces, and modern full-stack architectures.
      </p>
    </div>
  );
};
