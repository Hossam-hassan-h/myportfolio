import React from 'react';

export const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#E6DBC6] dark:bg-[#001E2B] transition-colors duration-300">
      {/* Subtle Developer Dot Grid Texture */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-50"
        style={{
          backgroundImage: 'radial-gradient(var(--grid-dot-color, rgba(31, 27, 23, 0.12)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Soft Glows (100% Static & Lightweight) */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[#8C5E34]/10 via-[#BFB195]/20 to-transparent dark:from-[#00ED64]/10 dark:via-[#00684A]/15 dark:to-transparent blur-[140px] transition-all duration-500" />
      <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-bl from-[#BFB195]/25 via-[#8C5E34]/8 to-transparent dark:from-[#00684A]/20 dark:via-[#00ED64]/8 dark:to-transparent blur-[130px] transition-all duration-500" />
      <div className="absolute bottom-[10%] left-[15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-[#8C5E34]/8 via-[#BFB195]/15 to-transparent dark:from-[#00ED64]/8 dark:via-[#0C2331]/40 dark:to-transparent blur-[120px] transition-all duration-500" />
    </div>
  );
};
