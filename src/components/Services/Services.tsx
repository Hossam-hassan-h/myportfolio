import React, { useEffect, useRef } from 'react';
import { servicesData } from './servicesData';
import { SectionHeading } from '../Common/SectionHeading';
import { UI } from '../Common/uiTokens';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Boxes,
  Monitor,
  Server,
  LayoutDashboard,
  ShoppingBag,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes':
        return Boxes;
      case 'Monitor':
        return Monitor;
      case 'Server':
        return Server;
      case 'LayoutDashboard':
        return LayoutDashboard;
      default:
        return ShoppingBag;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    cardsRef.current = cardsRef.current.slice(0, servicesData.length);

    const ctx = gsap.context(() => {
      const activeCards = cardsRef.current.filter((el) => el !== null) as HTMLElement[];
      if (activeCards.length > 0) {
        gsap.fromTo(
          activeCards,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className={UI.section}
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          badge="SERVICES"
          subtitle="Specialized MERN architecture capabilities structured to orchestrate complete production-grade applications."
        />

        {/* Services Cards Flex Container: 1 col mobile, 2 col tablet, 3 col desktop; centered last incomplete row */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 items-stretch w-full mt-8 sm:mt-12">
          {servicesData.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="opacity-0 flex w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-22px)]"
              >
                {/* Service Card */}
                <motion.div
                  whileHover={{
                    y: -4,
                    boxShadow: '0 16px 38px rgba(60,45,25,0.24)',
                    borderColor: 'rgba(140,94,52,0.35)',
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full rounded-[20px] border border-[rgba(31,27,23,0.10)] dark:border-[rgba(255,255,255,0.08)] p-[28px] sm:p-[32px] lg:p-[36px] shadow-[0_10px_28px_rgba(60,45,25,0.16),0_2px_6px_rgba(60,45,25,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] dark:hover:border-[#00ED64]/40 flex flex-col items-center text-center select-none transition-colors duration-300"
                  style={{
                    background: 'var(--bg-card-gradient)',
                  }}
                >
                  {/* 1. Icon Box: size 64px, rounded-2xl */}
                  <div className="w-16 h-16 rounded-2xl bg-[rgba(140,94,52,0.14)] dark:bg-[#00ED64]/10 border border-[rgba(140,94,52,0.22)] dark:border-[#00ED64]/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#8C5E34] dark:text-[#00ED64] transition-colors duration-300" />
                  </div>

                  {/* 2. Title */}
                  <h3 className="mt-6 text-[20px] lg:text-[22px] font-extrabold uppercase text-[#1F1B17] dark:text-[#F9FBFA] tracking-[0.01em] leading-[1.25] text-center break-words font-['Roboto',sans-serif] w-full transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* 3. Description */}
                  <p className="mt-4 text-[15px] lg:text-[16px] text-[#3D362D] dark:text-[#C1C7C6] leading-[1.7] max-w-[36ch] break-words text-center font-['Roboto',sans-serif] transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* 4. Divider & 5. Tags */}
                  {service.features && service.features.length > 0 && (
                    <div className="mt-auto w-full pt-6 flex flex-col items-center">
                      <div className="w-full h-[1px] bg-[rgba(31,27,23,0.12)] dark:bg-[rgba(255,255,255,0.08)] shrink-0 transition-colors duration-300" />
                      <div className="pt-5 flex flex-wrap justify-center gap-2 w-full">
                        {service.features.map((feat, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-3 py-1.5 rounded-full bg-[rgba(140,94,52,0.12)] hover:bg-[rgba(140,94,52,0.20)] text-[#5A3E22] dark:bg-[#00ED64]/10 dark:hover:bg-[#00ED64]/20 dark:text-[#00ED64] dark:border dark:border-[#00ED64]/20 text-[12px] font-semibold font-mono tracking-[0.02em] leading-[1.2] whitespace-normal transition-colors duration-200 select-none"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
