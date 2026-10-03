import React from 'react';
import { FileDown, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

interface HeroButtonsProps {
  buttonsRef: React.RefObject<HTMLDivElement | null>;
  onDownloadCV?: () => void;
  onGithubClick?: () => void;
}

export const HeroButtons: React.FC<HeroButtonsProps> = ({
  buttonsRef,
  onDownloadCV,
  onGithubClick,
}) => {
  const handleDownload = () => {
    onDownloadCV?.();
  };

  const handleGithub = () => {
    if (onGithubClick) {
      onGithubClick();
    } else {
      window.open('https://github.com/Hossam-hassan-h', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      ref={buttonsRef}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[420px] sm:max-w-none mx-auto px-5 sm:px-0 z-10 select-none mt-10 sm:mt-12 lg:mt-14"
    >
      {/* 1. Download CV Button */}
      <a
        href="/Hossam-Hassan-CV.pdf"
        download="Hossam-Hassan-CV.pdf"
        onClick={handleDownload}
        className="w-full sm:w-auto sm:min-w-[180px] !min-h-[40px] !h-[40px] !px-6 !py-0 !rounded-xl inline-flex items-center justify-center gap-3 text-sm sm:text-base font-bold leading-none whitespace-nowrap transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg bg-[#1F1B17] text-[#F6EFE2] border border-[#1F1B17] hover:bg-[#2B2621] hover:border-[#2B2621] dark:bg-[#00ED64] dark:text-[#001E2B] dark:border-[#00ED64] dark:hover:bg-[#00C853] dark:hover:border-[#00C853] dark:shadow-[0_4px_20px_rgba(0,237,100,0.25)] cursor-pointer"
      >
        <FileDown className="w-5 h-5 shrink-0 text-[#F6EFE2] dark:text-[#001E2B]" />
        <span>Download CV</span>
      </a>

      {/* 2. GitHub Button */}
      <button
        onClick={handleGithub}
        className="w-full sm:w-auto sm:min-w-[140px] !min-h-[40px] !h-[40px] !px-6 !py-0 !rounded-xl inline-flex items-center justify-center gap-3 text-sm sm:text-base font-bold leading-none whitespace-nowrap transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg bg-[#D9CCB4] text-[#1F1B17] border border-[#BFB195] hover:bg-[#DDD0B8] dark:bg-[#0C2331] dark:text-[#F9FBFA] dark:border-[#1E3A4B] dark:hover:bg-[#112D3E] dark:hover:border-[#00ED64]/40 cursor-pointer"
      >
        <SiGithub className="w-5 h-5 shrink-0 text-[#1F1B17] dark:text-[#F9FBFA]" />
        <span>GitHub</span>
        <ExternalLink className="w-3.5 h-3.5 shrink-0 ml-1 text-[#1F1B17] dark:text-[#F9FBFA]" />
      </button>
    </div>
  );
};
