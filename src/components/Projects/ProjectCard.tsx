import React, { useState } from 'react';
import type { ProjectItem } from './projectsData';
import { motion } from 'framer-motion';
import { ExternalLink, RotateCw, Lock } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="project-card-wrapper w-full max-w-[420px] mx-auto min-h-[600px] sm:min-h-[580px] group select-none"
      style={{ perspective: 1000 }}
    >
      {/* Outer Card with 3D Flip Motion */}
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative cursor-pointer min-h-[600px] sm:min-h-[580px]"
        onClick={handleFlip}
      >
        {/* ==================== FRONT SIDE ==================== */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 w-full h-full rounded-xl bg-[#D9CCB4] dark:bg-[#0C2331] border border-[#1F1B17]/14 dark:border-[rgba(255,255,255,0.08)] p-6 sm:p-7 lg:p-8 flex flex-col overflow-hidden shadow-[0_10px_28px_rgba(60,45,25,0.18),0_2px_6px_rgba(60,45,25,0.10)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.65)] transition-all duration-300 hover:shadow-[0_14px_36px_rgba(60,45,25,0.26),0_3px_8px_rgba(60,45,25,0.12)] dark:hover:shadow-[0_18px_40px_rgba(0,0,0,0.85)] dark:hover:border-[#00ED64]/40"
        >
{/* Image */}
<div
  className="relative w-[calc(100%+3rem)] -ml-6 -mt-6 sm:w-[calc(100%+3.5rem)] sm:-ml-7 sm:-mt-7 lg:w-[calc(100%+4rem)] lg:-ml-8 lg:-mt-8 aspect-[4/3] rounded-t-xl overflow-hidden bg-[#DDD0B8] dark:bg-[#06151E] border-b border-[#1F1B17]/14 dark:border-[rgba(255,255,255,0.08)] shrink-0 flex items-center justify-center transition-colors duration-300"
>
  <motion.img
    src={project.image}
    alt={project.title}
    whileHover={{ scale: 1.04 }}
    transition={{ duration: 0.3 }}
    className="w-full h-full object-cover"
    loading="lazy"
  />

  {/* Flip Info Badge */}
  <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F0E2]/95 dark:bg-[#041219]/95 border border-[#BFB195] dark:border-[#00ED64]/30 text-[#1F1B17] dark:text-[#00ED64] text-[10px] font-mono font-bold backdrop-blur-md shadow-sm transition-colors duration-300">
    <RotateCw className="w-3 h-3 text-[#8C5E34] dark:text-[#00ED64]" />
    <span>Info</span>
  </div>
</div>

          {/* Content block under the image */}
          <div className="flex-1 flex flex-col items-center text-center gap-3 pt-6 pb-5 w-full min-w-0">
            <h3 className="w-full text-center break-words leading-[1.25] text-xl sm:text-2xl font-[900] uppercase text-[#1F1B17] dark:text-[#F9FBFA] tracking-[0.01em] font-['Roboto',sans-serif] transition-colors duration-300">
              {project.title}
            </h3>

            {project.subtitle && (
              <span className="w-full text-center break-words text-xs font-bold italic uppercase tracking-wider text-[#5E5547] dark:text-[#00ED64] font-['Roboto',sans-serif] transition-colors duration-300">
                {project.subtitle}
              </span>
            )}

            <p className="w-full text-center break-words leading-[1.7] text-base text-[#3D362D] dark:text-[#C1C7C6] font-['Roboto',sans-serif] line-clamp-4 transition-colors duration-300">
              {project.description}
            </p>
          </div>

          {/* Footer hint */}
          <div className="mt-auto pt-2 pb-1 sm:pb-2">
            <span className="flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-full bg-[#1F1B17] text-[#F6EFE2] group-hover:bg-[#2B2621] dark:bg-[#001E2B] dark:text-[#00ED64] dark:border dark:border-[#00ED64]/30 dark:group-hover:bg-[#00ED64] dark:group-hover:text-[#001E2B] text-sm font-bold leading-snug tracking-wide text-center font-['Roboto',sans-serif] shadow-md transition-all duration-300">
              <span>Click to view details &amp; links</span>
              <span aria-hidden="true" className="shrink-0">→</span>
            </span>
          </div>
        </div>

        {/* ==================== BACK SIDE ==================== */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'var(--bg-card-dark)',
          }}
          className="absolute inset-0 w-full h-full rounded-xl border border-[rgba(243,234,217,0.12)] dark:border-[rgba(0,237,100,0.20)] p-6 sm:p-7 lg:p-8 flex flex-col overflow-hidden shadow-[0_14px_36px_rgba(20,15,10,0.40)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.7)] text-left transition-colors duration-300"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-end pb-4 border-b border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.08)]">
            <button
              onClick={handleFlip}
              className="shrink-0 flex items-center gap-1.5 text-sm font-mono text-[#D6CBB7] hover:text-[#F6EFE2] dark:text-[#889397] dark:hover:text-[#00ED64] px-2 py-1 rounded-md transition-colors font-semibold cursor-pointer"
            >
              <RotateCw className="w-4 h-4 text-[#D6CBB7] dark:text-[#00ED64]" />
              <span>Flip</span>
            </button>
          </div>

          {/* Subtitle: centered horizontally, 10% from the card top */}
          <span className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] text-center text-sm font-mono uppercase tracking-wider font-bold text-[#A89F8D] dark:text-[#00ED64] break-words transition-colors duration-300">
            {project.subtitle}
          </span>

          {/* Middle Content (centered horizontally + vertically) */}
          <div className="flex-1 overflow-y-auto min-h-0 py-5 flex flex-col">
            <div className="my-auto mx-auto w-full max-w-[320px] flex flex-col items-center text-center gap-5 px-2">
              <h3 className="text-2xl font-bold text-[#F6EFE2] dark:text-[#F9FBFA] font-['Roboto',sans-serif] tracking-tight leading-tight break-words transition-colors duration-300">
                {project.title}
              </h3>

              {/* Key Highlights */}
              <div className="flex flex-col items-center gap-3 w-full">
                <span className="text-sm font-mono uppercase text-[#D6CBB7] dark:text-[#00ED64] tracking-wider font-bold block transition-colors duration-300">
                  Key Highlights:
                </span>
                <ul className="flex flex-col gap-3 list-none m-0 p-0 w-full">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-[#D6CBB7] dark:text-[#C1C7C6] font-['Roboto',sans-serif] leading-[1.6] break-words text-center pb-3 border-b border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.08)] last:border-b-0 last:pb-0 transition-colors duration-300"
                    >
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="pt-5 border-t border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.08)] flex items-center justify-between gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {project.isPrivate || !project.liveDemoUrl ? (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="flex-1 inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] px-4 rounded-xl font-bold text-sm tracking-wide text-[#F6EFE2] bg-[#2B2621] border border-[rgba(243,234,217,0.12)] dark:bg-[#00ED64] dark:text-[#001E2B] dark:border-[#00ED64] transition-all duration-250 shadow-sm cursor-not-allowed opacity-90"
                title="Private project - No public access"
              >
                <span className="flex items-center gap-1.5 font-['Roboto',sans-serif]">
                  <span>Private</span>
                  <Lock className="w-4 h-4 text-[#D6CBB7] dark:text-[#001E2B]" />
                </span>
              </button>
            ) : (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] px-4 rounded-xl font-bold text-sm tracking-wide text-[#F6EFE2] bg-[#2B2621] hover:bg-[#3A332B] border border-[rgba(243,234,217,0.12)] dark:bg-[#00ED64] dark:text-[#001E2B] dark:hover:bg-[#00C853] dark:border-[#00ED64] dark:shadow-[0_4px_16px_rgba(0,237,100,0.25)] transition-all duration-250 shadow-sm"
              >
                <span className="flex items-center gap-1.5 font-['Roboto',sans-serif]">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 text-[#D6CBB7] dark:text-[#001E2B]" />
                </span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] px-4 rounded-xl font-semibold text-sm tracking-wide text-[#1F1B17] bg-[#D9CCB4] hover:bg-[#DDD0B8] dark:bg-[#0C2331] dark:text-[#F9FBFA] dark:hover:bg-[#112D3E] dark:border dark:border-[#1E3A4B] transition-all duration-250 shadow-sm"
            >
              <SiGithub className="w-4 h-4 text-[#1F1B17] dark:text-[#F9FBFA]" />
              <span className="font-['Roboto',sans-serif]">Source</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};