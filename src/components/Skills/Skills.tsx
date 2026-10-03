import React from 'react';
import { skillsMilestones, type SkillMilestone } from './skillsData';
import { SectionHeading } from '../Common/SectionHeading';

const row1Skills = skillsMilestones.slice(0, Math.ceil(skillsMilestones.length / 2));
const row2Skills = skillsMilestones.slice(Math.ceil(skillsMilestones.length / 2));

const renderSkillCard = (skill: SkillMilestone, key: string) => {
  const IconComponent = skill.icon;
  return (
    <div
      key={key}
      className="w-[130px] h-[150px] sm:w-[150px] sm:h-[170px] lg:w-[170px] lg:h-[190px] p-4 lg:p-5 rounded-[6px] bg-[#D9CCB4] dark:bg-[#0C2331] border border-[#1F1B17]/14 dark:border-[rgba(255,255,255,0.08)] shadow-[0_10px_28px_rgba(60,45,25,0.18),0_2px_6px_rgba(60,45,25,0.10)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_14px_36px_rgba(60,45,25,0.26),0_3px_8px_rgba(60,45,25,0.12)] dark:hover:border-[#00ED64]/40 hover:-translate-y-1 transition-all duration-250 flex flex-col items-center justify-between text-center select-none group cursor-default shrink-0 min-w-0"
    >
      {/* Icon in rounded icon box */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center bg-[#8C5E34]/14 dark:bg-[#00ED64]/10 border border-[#1F1B17]/14 dark:border-[#00ED64]/20 shadow-inner transition-transform duration-250 group-hover:scale-105 shrink-0">
        <IconComponent
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 shrink-0"
          style={{ color: skill.color }}
        />
      </div>

      {/* Skill Name */}
      <span className="font-semibold text-sm lg:text-base text-[#1F1B17] dark:text-[#F9FBFA] font-['Roboto',sans-serif] text-center break-words leading-tight w-full px-1 min-w-0 transition-colors duration-300">
        {skill.name}
      </span>

      {/* Category Tag */}
      <div className="w-full flex items-center justify-center min-w-0">
        <span className="px-2.5 sm:px-3 py-0.5 rounded-md text-[9px] sm:text-[10px] font-mono uppercase font-bold bg-[#8C5E34]/14 dark:bg-[#00ED64]/10 text-[#8C5E34] dark:text-[#00ED64] border border-[#1F1B17]/14 dark:border-[#00ED64]/20 break-words whitespace-nowrap leading-none shrink-0 transition-colors duration-300">
          {skill.category}
        </span>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28 overflow-hidden flex flex-col items-center justify-center bg-[#DDD0B8] dark:bg-[#001721] transition-colors duration-300"
    >
      {/* Inline styles for smooth infinite marquee animation */}
      <style>{`
        @keyframes marquee-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-scroll-left 30s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-scroll-right 30s linear infinite;
        }
        @media (min-width: 1024px) {
          .animate-marquee-left {
            animation-duration: 40s;
          }
          .animate-marquee-right {
            animation-duration: 40s;
          }
        }
        @media (hover: hover) and (pointer: fine) {
          .marquee-row:hover .animate-marquee-left,
          .marquee-row:hover .animate-marquee-right {
            animation-play-state: paused;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation: none !important;
            transform: none !important;
            width: 100% !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Title Divider */}
        <div className="w-full">
          <SectionHeading
            badge="SKILLS"
            subtitle="The modern full-stack ecosystem I wield to engineer production-ready, scalable, and high-performance digital products."
          />
        </div>

        {/* Dual-Track Infinite Marquee Container */}
        <div
          className="w-full max-w-6xl mx-auto overflow-hidden px-5 sm:px-8 lg:px-12 relative select-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex flex-col gap-4 lg:gap-6 w-full">
            {/* Row 1 (scrolls left) */}
            <div className="marquee-row overflow-hidden w-full">
              <div className="animate-marquee-left">
                <div className="flex shrink-0 gap-4 sm:gap-5 lg:gap-6 pr-4 sm:pr-5 lg:pr-6 motion-reduce:pr-0 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center">
                  {row1Skills.map((skill, idx) => renderSkillCard(skill, `r1-a-${idx}`))}
                </div>
                <div
                  className="flex shrink-0 gap-4 sm:gap-5 lg:gap-6 pr-4 sm:pr-5 lg:pr-6 motion-reduce:hidden"
                  aria-hidden="true"
                >
                  {row1Skills.map((skill, idx) => renderSkillCard(skill, `r1-b-${idx}`))}
                </div>
              </div>
            </div>

            {/* Row 2 (scrolls right) */}
            <div className="marquee-row overflow-hidden w-full">
              <div className="animate-marquee-right">
                <div className="flex shrink-0 gap-4 sm:gap-5 lg:gap-6 pr-4 sm:pr-5 lg:pr-6 motion-reduce:pr-0 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center">
                  {row2Skills.map((skill, idx) => renderSkillCard(skill, `r2-a-${idx}`))}
                </div>
                <div
                  className="flex shrink-0 gap-4 sm:gap-5 lg:gap-6 pr-4 sm:pr-5 lg:pr-6 motion-reduce:hidden"
                  aria-hidden="true"
                >
                  {row2Skills.map((skill, idx) => renderSkillCard(skill, `r2-b-${idx}`))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
