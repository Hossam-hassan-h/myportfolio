import React, { useEffect, useRef } from 'react';
import { experienceData } from './experienceData';
import { SectionHeading } from '../Common/SectionHeading';
import { UI } from '../Common/uiTokens';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopTimelineRef = useRef<HTMLDivElement>(null);
  const desktopBeamRef = useRef<HTMLDivElement>(null);
  const desktopItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopNodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile refs
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileLineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    desktopItemRefs.current = desktopItemRefs.current.slice(0, experienceData.length);
    desktopNodeRefs.current = desktopNodeRefs.current.slice(0, experienceData.length);
    mobileCardRefs.current = mobileCardRefs.current.slice(0, experienceData.length);
    mobileNodeRefs.current = mobileNodeRefs.current.slice(0, experienceData.length);
    mobileLineRefs.current = mobileLineRefs.current.slice(0, experienceData.length);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const playNodeFlicker = (node: HTMLElement) => {
      if (prefersReducedMotion) {
        gsap.set(node, {
          backgroundColor: '#4A3B2E',
          borderColor: '#A89F8D',
          scale: 1,
          boxShadow: '0 0 0 4px rgba(74,59,46,0.25)',
        });
        return;
      }

      const tl = gsap.timeline();
      // 0.00s OFF: bg #1F1B17, border 2px solid #5A5246, no glow, scale 0.85
      tl.set(node, {
        backgroundColor: '#1F1B17',
        borderColor: '#5A5246',
        scale: 0.85,
        boxShadow: 'none',
      })
        // 0.15s dim
        .to(node, {
          duration: 0.15,
          backgroundColor: '#4A3B2E',
          borderColor: '#5A5246',
          scale: 0.92,
          boxShadow: '0 0 0 2px rgba(74,59,46,0.15)',
          ease: 'power1.inOut',
        })
        // 0.25s almost OFF
        .to(node, {
          duration: 0.1,
          backgroundColor: '#1F1B17',
          borderColor: '#5A5246',
          scale: 0.88,
          boxShadow: 'none',
          ease: 'power1.inOut',
        })
        // 0.40s flash
        .to(node, {
          duration: 0.15,
          backgroundColor: '#5C4A3A',
          borderColor: '#D6CBB7',
          scale: 1.05,
          boxShadow: '0 0 0 5px rgba(74,59,46,0.35)',
          ease: 'power2.out',
        })
        // 0.55s slight dip
        .to(node, {
          duration: 0.15,
          backgroundColor: '#4A3B2E',
          borderColor: '#8C5E34',
          scale: 0.95,
          boxShadow: '0 0 0 3px rgba(74,59,46,0.2)',
          ease: 'power1.inOut',
        })
        // 0.90s steady ON
        .to(node, {
          duration: 0.35,
          backgroundColor: '#4A3B2E',
          borderColor: '#A89F8D',
          scale: 1,
          boxShadow: '0 0 0 4px rgba(74,59,46,0.25)',
          ease: 'power2.out',
        });
    };

    const ctx = gsap.context(() => {
      // DESKTOP ANIMATIONS (>= 768px)
      if (desktopTimelineRef.current && desktopBeamRef.current) {
        gsap.fromTo(
          desktopBeamRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: desktopTimelineRef.current,
              start: 'top 70%',
              end: 'bottom 85%',
              scrub: 0.6,
            },
          }
        );

        desktopNodeRefs.current.forEach((node) => {
          if (!node) return;
          ScrollTrigger.create({
            trigger: node,
            start: 'top 82%',
            once: true,
            onEnter: () => playNodeFlicker(node),
          });
        });

        desktopItemRefs.current.forEach((el, index) => {
          if (!el) return;
          const isEven = index % 2 === 0;

          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: 50,
              x: window.innerWidth >= 1280 ? (isEven ? -40 : 40) : 0,
              filter: 'blur(8px)',
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              filter: 'blur(0px)',
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // MOBILE & TABLET ANIMATIONS (< 1280px)
      mobileCardRefs.current.forEach((card, index) => {
        if (!card) return;

        // Card reveal animation: opacity 0, translateY 20px, scale 0.97 -> opacity 1, translateY 0, scale 1 (0.6s ease-out)
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 20,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
              onEnter: () => {
                // If there is a connector line & node above this card (index > 0), light it up simultaneously
                if (index > 0) {
                  const line = mobileLineRefs.current[index - 1];
                  const node = mobileNodeRefs.current[index - 1];
                  if (line) {
                    gsap.to(line, {
                      opacity: 1,
                      duration: 0.5,
                      ease: 'power2.out',
                    });
                  }
                  if (node) {
                    playNodeFlicker(node);
                  }
                }
              },
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={UI.section}
    >
      <div className={UI.container}>
        {/* Section Title Divider */}
        <SectionHeading
          badge="EXPERIENCE"
          subtitle="A track record of engineering scalable platforms, multi-hospital systems, and client solutions across the Middle East."
        />

        {/* ========================================================================= */}
        {/* DESKTOP TIMELINE (>= 1280px, MODE B) */}
        {/* ========================================================================= */}
        <div
          ref={desktopTimelineRef}
          className="hidden xl:block relative w-full max-w-[1200px] mt-8 sm:mt-12 mx-auto"
        >
          {/* Base Inactive Spine Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-[rgba(31,27,23,0.18)] dark:bg-[rgba(255,255,255,0.10)] rounded-full transition-colors duration-300" />

          {/* Active Glowing Neon Beam */}
          <div
            ref={desktopBeamRef}
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#1F1B17] to-[#5A5246] dark:from-[#00ED64] dark:to-[#00684A] rounded-full origin-top shadow-[0_0_8px_rgba(43,38,33,0.5)] dark:shadow-[0_0_12px_rgba(0,237,100,0.6)] transition-colors duration-500"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Timeline Milestones */}
          <div className="space-y-10 sm:space-y-14 lg:space-y-18 relative w-full">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    desktopItemRefs.current[index] = el;
                  }}
                  className={`relative flex items-center w-full ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Central Node Beacon: Plain Glowing Circle (18px, No icon) */}
                  <div
                    ref={(el) => {
                      desktopNodeRefs.current[index] = el;
                    }}
                    className="absolute left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-[#1F1B17] dark:bg-[#001E2B] border-2 border-[#5A5246] dark:border-[#00ED64] z-20 pointer-events-none transition-colors duration-300"
                    style={{ transform: 'scale(0.85)', boxShadow: '0 0 0 4px rgba(74,59,46,0.25)' }}
                    aria-hidden="true"
                  />

                  {/* Card Column: Placed left or right on desktop */}
                  <div
                    className={`w-[48%] ${
                      isEven ? 'pr-10' : 'pl-10'
                    }`}
                  >
                    {/* Outer Brown Card */}
                    <motion.div
                      whileHover={{
                        y: -4,
                        boxShadow: '0 18px 44px rgba(20,15,10,0.45)',
                      }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-auto rounded-[16px] p-6 sm:p-7 lg:p-8 border border-[rgba(243,234,217,0.12)] dark:border-[rgba(0,237,100,0.18)] shadow-[0_14px_36px_rgba(20,15,10,0.40),inset_0_1px_0_rgba(243,234,217,0.06)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.7)] transition-all duration-250 select-none flex flex-col items-center text-center gap-0"
                      style={{
                        background: 'var(--bg-card-dark)',
                      }}
                    >
                      {/* 1. Top EXPERIENCE Label */}
                      <span className="text-[11px] font-bold font-['Roboto',sans-serif] uppercase tracking-[0.22em] text-[#BFB4A0] dark:text-[#00ED64] block text-center leading-none transition-colors duration-300">
                        EXPERIENCE
                      </span>

                      {/* 2. Title */}
                      <h3 className="mt-4 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#F6EFE2] dark:text-[#F9FBFA] font-['Roboto',sans-serif] tracking-[-0.01em] leading-[1.25] break-words text-center w-full transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* 3. Divider */}
                      <div className="mt-5 w-full h-[1px] bg-[rgba(243,234,217,0.14)] dark:bg-[rgba(255,255,255,0.08)] shrink-0 transition-colors duration-300" />

                      {/* 4. Highlights list */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="mt-5 w-full max-w-[34rem] mx-auto">
                          <ul className="flex flex-col gap-4 list-none m-0 p-0 w-full">
                            {item.highlights.map((highlight, hIdx) => (
                              <li
                                key={hIdx}
                                className="flex items-start gap-3 text-left w-full min-w-0"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full bg-[#A89F8D] dark:bg-[#00ED64] shrink-0 mt-[10px] transition-colors duration-300"
                                  aria-hidden="true"
                                />
                                <span className="text-[15px] lg:text-[16px] font-normal leading-[1.65] text-[#D6CBB7] dark:text-[#C1C7C6] font-['Roboto',sans-serif] min-w-0 break-words flex-1 transition-colors duration-300">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SINGLE COLUMN TIMELINE (< 1280px, MODE A) */}
        {/* ========================================================================= */}
        <div
          ref={mobileContainerRef}
          className="block xl:hidden w-full max-w-6xl mx-auto px-5 sm:px-8 mt-6 relative flex flex-col items-center"
        >
          {experienceData.map((item, index) => {
            const isLast = index === experienceData.length - 1;

            return (
              <React.Fragment key={item.id}>
                {/* Single Column Brown Card */}
                <div
                  ref={(el) => {
                    mobileCardRefs.current[index] = el;
                  }}
                  className="w-[calc(100%-24px)] sm:w-full max-w-[560px] mx-auto h-auto rounded-[16px] p-6 sm:p-7 border border-[rgba(243,234,217,0.12)] dark:border-[rgba(0,237,100,0.18)] shadow-[0_14px_36px_rgba(20,15,10,0.40),inset_0_1px_0_rgba(243,234,217,0.06)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.7)] select-none z-10 flex flex-col items-center text-center gap-0 transition-colors duration-300"
                  style={{
                    background: 'var(--bg-card-dark)',
                  }}
                >
                  {/* Top "EXPERIENCE" Label */}
                  <span className="text-[11px] font-bold font-['Roboto',sans-serif] uppercase tracking-[0.22em] text-[#BFB4A0] dark:text-[#00ED64] block text-center leading-none transition-colors duration-300">
                    EXPERIENCE
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold text-[#F6EFE2] dark:text-[#F9FBFA] font-['Roboto',sans-serif] leading-[1.25] break-words text-center w-full transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="mt-5 w-full h-[1px] bg-[rgba(243,234,217,0.14)] dark:bg-[rgba(255,255,255,0.08)] shrink-0 transition-colors duration-300" />

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-5 w-full max-w-[34rem] mx-auto">
                      <ul className="flex flex-col gap-4 list-none m-0 p-0 w-full">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-left w-full min-w-0">
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#A89F8D] dark:bg-[#00ED64] shrink-0 mt-[10px] transition-colors duration-300"
                              aria-hidden="true"
                            />
                            <span className="text-[15px] lg:text-[16px] font-normal leading-[1.65] text-[#D6CBB7] dark:text-[#C1C7C6] font-['Roboto',sans-serif] min-w-0 break-words flex-1 transition-colors duration-300">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Connector Block Between Cards: height 72px, center line + node in middle */}
                {!isLast && (
                  <div className="relative w-full h-[72px] flex items-center justify-center">
                    {/* Base center vertical spine line */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[rgba(31,27,23,0.18)] dark:bg-[rgba(255,255,255,0.10)] transition-colors duration-300" />

                    {/* Active glowing connector line segment */}
                    <div
                      ref={(el) => {
                        mobileLineRefs.current[index] = el;
                      }}
                      className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#1F1B17] to-[#5A5246] dark:from-[#00ED64] dark:to-[#00684A] opacity-30 shadow-[0_0_8px_rgba(43,38,33,0.5)] dark:shadow-[0_0_12px_rgba(0,237,100,0.6)] transition-all duration-500"
                    />

                    {/* 18px Node centered vertically & horizontally on the line */}
                    <div
                      ref={(el) => {
                        mobileNodeRefs.current[index] = el;
                      }}
                      className="relative z-10 w-[18px] h-[18px] rounded-full bg-[#1F1B17] dark:bg-[#001E2B] border-2 border-[#5A5246] dark:border-[#00ED64] transition-all duration-300 pointer-events-none"
                      style={{ transform: 'scale(0.85)', boxShadow: '0 0 0 4px rgba(74,59,46,0.25)' }}
                      aria-hidden="true"
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
