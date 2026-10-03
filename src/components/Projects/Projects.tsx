import React, { useEffect, useRef } from 'react';
import { projectsData } from './projectsData';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from '../Common/SectionHeading';
import { UI } from '../Common/uiTokens';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll('.project-card-wrapper');

      // Staggered reveal animation for all project cards
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className={UI.section}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#8C5E34]/8 dark:bg-[#00ED64]/8 rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-500" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#BFB195]/20 dark:bg-[#00684A]/15 rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-500" />

      <div className={UI.container}>
        {/* Section Title Divider */}
        <SectionHeading
          badge="PROJECTS"
          title="Engineered"
          highlightText="Case Studies"
          subtitle="Production-grade web applications, enterprise systems, and real-time platforms engineered with modern full-stack architectures."
        />

        {/* 3-Column Desktop, 2-Column Tablet, 1-Column Mobile Grid - Centered */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 w-full max-w-[1200px] mx-auto justify-center justify-items-center"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
