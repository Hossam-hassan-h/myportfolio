import React from 'react';
import { Code2, Compass, Layers, ShieldCheck } from 'lucide-react';

export const AboutHighlights: React.FC = () => {
  const highlights = [
    {
      title: 'Full Stack MERN',
      desc: 'End-to-end applications from database to UI.',
      icon: Layers,
      accent: 'border-cyan-500/10 text-cyan-400',
    },
    {
      title: 'Clean Architecture',
      desc: 'Modular components and maintainable codebases.',
      icon: Code2,
      accent: 'border-purple-500/10 text-purple-400',
    },
    {
      title: 'Problem Solver',
      desc: 'Algorithmic efficiency & robust application logic.',
      icon: Compass,
      accent: 'border-sky-500/10 text-sky-400',
    },
    {
      title: 'Secure & Optimized APIs',
      desc: 'Reliable backend structures & routing flow.',
      icon: ShieldCheck,
      accent: 'border-emerald-500/10 text-emerald-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-4">
      {highlights.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="group p-5 sm:p-6 rounded-2xl bg-[#090d1a]/60 border border-white/5 shadow-lg hover:border-cyan-500/20 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors shrink-0 mt-0.5">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-base font-bold text-white font-['Outfit',sans-serif] tracking-tight">
                  {item.title}
                </span>
                <span className="text-xs sm:text-[13px] text-slate-300 mt-1 leading-relaxed font-sans text-left">
                  {item.desc}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
