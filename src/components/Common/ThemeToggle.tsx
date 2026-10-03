import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative z-20 shrink-0 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] rounded-xl cursor-pointer transition-all duration-300 select-none group bg-[#F4EDE0] hover:bg-[#EDE1CE] text-[#1F1B17] border border-[#BFB195]/80 shadow-sm hover:shadow dark:bg-[#0C2331] dark:hover:bg-[#112D3E] dark:text-[#00ED64] dark:border-[#00ED64]/40 dark:shadow-[0_2px_10px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_2px_14px_rgba(0,237,100,0.3)] hover:scale-105 active:scale-95 ${className}`}
    >
      <div className="relative w-5 h-5 min-w-[20px] min-h-[20px] flex items-center justify-center">
        {/* Sun Icon (shown in dark mode to switch to light mode) */}
        <Sun
          className={`w-5 h-5 min-w-[20px] min-h-[20px] text-[#00ED64] transition-all duration-300 absolute inset-0 m-auto ${isDark
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0 pointer-events-none'
            }`}
        />

        {/* Moon Icon (shown in light mode to switch to dark mode) */}
        <Moon
          className={`w-5 h-5 min-w-[20px] min-h-[20px] text-[#1F1B17] transition-all duration-300 absolute inset-0 m-auto ${isDark
              ? 'opacity-0 rotate-90 scale-0 pointer-events-none'
              : 'opacity-100 rotate-0 scale-100'
            }`}
        />
      </div>
    </button>
  );
};
