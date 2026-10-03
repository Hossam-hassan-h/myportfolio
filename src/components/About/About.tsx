import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AboutAvatar } from './AboutAvatar';
import { AboutText } from './AboutText';
import { SectionHeading } from '../Common/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !leftColRef.current || !rightColRef.current) return;

    const ctx = gsap.context(() => {
      // Avatar card reveals with gentle scale & fade
      gsap.fromTo(
        leftColRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Right text reveals with staggered slide
      gsap.fromTo(
        rightColRef.current,
        {
          opacity: 0,
          y: 40,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          delay: 0.15,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Subtle Ambient Section Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#8C5E34]/8 dark:bg-[#00ED64]/8 rounded-full blur-[130px] pointer-events-none -z-10 transition-colors duration-500" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#BFB195]/20 dark:bg-[#00684A]/15 rounded-full blur-[130px] pointer-events-none -z-10 transition-colors duration-500" />

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Section Title Divider */}
        <div className="w-full">
          <SectionHeading
            badge="ABOUT ME"
            title="Engineering with"
            highlightText="Purpose & Craft"
            subtitle="A deeper look into who I am, my philosophy as a full-stack engineer, and the principles that guide my work."
          />
        </div>

        {/* Content Grid: Real Photo Card (Visual Focus) + Professional Story */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left Column: Real Photo Card (Visual Focus) */}
          <div
            ref={leftColRef}
            className="w-full lg:w-5/12 flex items-center justify-center shrink-0 min-w-0"
          >
            <AboutAvatar />
          </div>

          {/* Right Column: Narrative & Values */}
          <div
            ref={rightColRef}
            className="w-full lg:w-7/12 flex flex-col items-center lg:items-start justify-center min-w-0"
          >
            <AboutText />
          </div>
        </div>
      </div>
    </section>
  );
};