import React from 'react';
import { ArrowUpRight, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { UI } from '../Common/uiTokens';

export const AboutText: React.FC = () => {
  const pillars = [
    {
      title: 'Architectural Rigor',
      description: 'Building maintainable systems with clean separation of concerns and robust design patterns.',
      icon: Cpu,
    },
    {
      title: 'Performance-First',
      description: 'Optimizing rendering cycles, backend latency, and asset delivery for fluid 60fps experiences.',
      icon: Zap,
    },
    {
      title: 'Reliability & Quality',
      description: 'Prioritizing data integrity, security best practices, and resilient error-handling at scale.',
      icon: ShieldCheck,
    },
  ];

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-7 w-full max-w-2xl mx-auto lg:w-full items-center lg:items-start text-center lg:text-left font-['Roboto',sans-serif]">
      {/* 1. Header Typography */}
      <div className="flex flex-col gap-2 items-center lg:items-start text-center lg:text-left w-full min-w-0 px-4 sm:px-0">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5E5547] dark:text-[#889397] font-bold break-words transition-colors duration-300">
          Who I Am & What I Do
        </span>
        <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-[900] text-[#1F1B17] dark:text-[#F9FBFA] tracking-tight leading-tight uppercase font-['Roboto',sans-serif] break-words transition-colors duration-300">
          Hi, I'm Hossam Hassan
        </h3>
        <h4 className="text-lg sm:text-xl font-bold text-[#3D362D] dark:text-[#00ED64] break-words transition-colors duration-300">
          Full Stack Developer &amp; Software Engineer
        </h4>
      </div>

      {/* 2. Professional Narrative */}
      <div className="flex flex-col gap-4 text-base text-[#3D362D] dark:text-[#C1C7C6] leading-[1.6] items-center lg:items-start text-center lg:text-left w-full min-w-0 px-4 sm:px-0 transition-colors duration-300">
        <p className="break-words">
          I am a dedicated software engineer specializing in architecting modern, resilient web applications. With a solid foundation in computer science and a passion for engineering excellence, I transform complex technical challenges into elegant, intuitive digital products.
        </p>
        <p className="text-[#5E5547] dark:text-[#889397] text-sm break-words transition-colors duration-300">
          My focus is on creating end-to-end solutions that balance performance, maintainability, and user delight. I thrive in fast-paced environments where clean architecture and thoughtful user experiences directly drive business growth.
        </p>
      </div>

      {/* 3. Core Engineering Values (Card 2 Styling) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 w-full min-w-0">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-xl bg-[#D9CCB4] dark:bg-[#0C2331] border border-[#1F1B17]/14 dark:border-[rgba(255,255,255,0.08)] shadow-[0_10px_28px_rgba(60,45,25,0.18),0_2px_6px_rgba(60,45,25,0.10)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_14px_36px_rgba(60,45,25,0.26),0_3px_8px_rgba(60,45,25,0.12)] dark:hover:border-[#00ED64]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 group min-w-0"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#8C5E34]/14 dark:bg-[#00ED64]/10 border border-[#1F1B17]/14 dark:border-[#00ED64]/20 flex items-center justify-center shrink-0 text-[#8C5E34] dark:text-[#00ED64] group-hover:scale-105 transition-all duration-300">
                <Icon className="w-5 h-5 text-[#8C5E34] dark:text-[#00ED64]" />
              </div>

              {/* Title + Description */}
              <div className="flex flex-col gap-3 w-full min-w-0">
                <span className="text-base font-bold uppercase text-[#1F1B17] dark:text-[#F9FBFA] tracking-tight block font-['Roboto',sans-serif] break-words w-full transition-colors duration-300">
                  {pillar.title}
                </span>
                <p className="text-sm sm:text-xs text-[#3D362D] dark:text-[#889397] leading-[1.6] break-words w-full transition-colors duration-300">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Action CTA */}
      <div className="pt-2 w-full flex justify-center lg:justify-start">
        <button
          onClick={handleContactClick}
          className={`${UI.button.primary} !px-5 !py-2 !min-h-0 !text-sm mx-auto lg:mx-0 min-w-0 max-w-full`}
        >
          <span className="flex items-center justify-center gap-1.5 font-['Roboto',sans-serif] text-sm text-center">
            <span className="break-words">Let's Build Together</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F6EFE2] dark:text-[#001E2B] shrink-0" />
          </span>
        </button>
      </div>
    </div>
  );
};