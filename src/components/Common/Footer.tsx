import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { UI } from './uiTokens';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-[#1F1B17]/14 dark:border-[rgba(255,255,255,0.08)] bg-[#E6DBC6]/90 dark:bg-[#001721]/95 backdrop-blur-md py-12 px-5 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <div className={`${UI.container} flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#5E5547] dark:text-[#889397] font-mono`}>
        {/* Brand & Status */}
        <div className="flex items-center gap-3">
          <BrandLogo className="w-8 h-8" />
          <div className="flex flex-col text-left">
            <span className="font-bold text-[#1F1B17] dark:text-[#F9FBFA] font-['Outfit',sans-serif] text-sm tracking-tight transition-colors">
              HOSSAM HASSAN
            </span>
            <span className="text-[10px] text-[#8C5E34] dark:text-[#00ED64] font-semibold transition-colors">Full Stack MERN Developer</span>
          </div>
        </div>

        {/* Center Note Area */}
        <div className="flex flex-col items-center text-center gap-1 text-[#3D362D] dark:text-[#C1C7C6] font-sans leading-tight">
          <div className="flex items-center gap-1.5 font-medium text-[#1F1B17] dark:text-[#F9FBFA] text-xs transition-colors">
            <span>Turning Ideas Into Scalable Digital Experiences</span>
          </div>
          <p className="text-[11px] text-[#5E5547] dark:text-[#889397] transition-colors">
            Building products that are fast, elegant, and made to last.
          </p>
        </div>

        {/* Social Icons Links & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Hossam-hassan-h"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-9 h-9 rounded-xl bg-[#D9CCB4] hover:bg-[#DDD0B8] border border-[#BFB195] dark:bg-[#0C2331] dark:hover:bg-[#112D3E] dark:border-[#1E3A4B] dark:text-[#F9FBFA] dark:hover:text-[#00ED64] dark:hover:border-[#00ED64]/40 shadow-sm flex items-center justify-center text-[#1F1B17] hover:text-[#8C5E34] transition-all"
          >
            <SiGithub className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/hossam-hassan-hefni"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-9 h-9 rounded-xl bg-[#D9CCB4] hover:bg-[#DDD0B8] border border-[#BFB195] dark:bg-[#0C2331] dark:hover:bg-[#112D3E] dark:border-[#1E3A4B] shadow-sm flex items-center justify-center text-[#0A66C2] dark:hover:border-[#00ED64]/40 transition-all"
          >
            <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
          </a>

          <a
            href="https://wa.me/201116596635"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="w-9 h-9 rounded-xl bg-[#D9CCB4] hover:bg-[#DDD0B8] border border-[#BFB195] dark:bg-[#0C2331] dark:hover:bg-[#112D3E] dark:border-[#1E3A4B] shadow-sm flex items-center justify-center text-[#25D366] dark:hover:border-[#00ED64]/40 transition-all"
          >
            <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
          </a>

          {/* Back to Top CTA */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1F1B17] hover:bg-[#2B2621] text-[#F6EFE2] dark:bg-[#00ED64] dark:hover:bg-[#00C853] dark:text-[#001E2B] dark:border-[#00ED64] dark:shadow-[0_4px_16px_rgba(0,237,100,0.25)] transition-all border border-[#1F1B17] shadow-sm font-semibold cursor-pointer ml-1"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F6EFE2] dark:text-[#001E2B]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
