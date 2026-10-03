import React, { useEffect, useRef } from 'react';
import { HeroText } from './HeroText';
import { HeroPortrait } from './HeroPortrait';
import { HeroButtons } from './HeroButtons';
import { initHeroEntrance, initHeroScroll } from '../../animations/heroAnimations';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);

  // Sub-element refs for GSAP entrance choreo
  const greetingRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const portraitContainerRef = useRef<HTMLDivElement>(null);
  const rotatingTextRef = useRef<SVGSVGElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingBadgesRef = useRef<HTMLDivElement>(null);
  const portraitWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Master Hero Entrance Animation (Exact specified sequence)
    const entranceTl = initHeroEntrance(heroSectionRef.current, {
      background: bgGlowRef.current,
      greeting: greetingRef.current,
      name: nameRef.current,
      subtitle: subtitleRef.current,
      tagline: taglineRef.current,
      portrait: portraitContainerRef.current,
      rotatingText: rotatingTextRef.current,
      buttons: buttonsRef.current,
      floatingEffects: floatingBadgesRef.current,
    });

    // 2. Parallax Scroll Transition
    const scrollTl = initHeroScroll(
      heroSectionRef.current,
      heroContentRef.current,
      portraitWrapperRef.current
    );

    return () => {
      entranceTl?.kill();
      scrollTl?.kill();
    };
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 

  const handleGithubClick = () => {
    window.open('https://github.com/Hossam-hassan-h', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      ref={heroSectionRef}
      style={{ paddingTop: '115px' }}
      className="relative min-h-screen w-full flex flex-col justify-between items-center pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      {/* Ambient Radial Spotlight Glow for Hero Section */}
      <div
        ref={bgGlowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] lg:w-[950px] h-[550px] sm:h-[750px] lg:h-[950px] rounded-full bg-gradient-to-b from-[#121A26]/5 via-[#1E2735]/5 to-transparent dark:from-[#00ED64]/8 dark:via-[#00684A]/10 dark:to-transparent blur-[130px] pointer-events-none -z-10 transition-colors duration-500"
      />

      {/* Hero Center Column Container */}
      <div
        ref={heroContentRef}
        className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center z-10 px-2"
      >
        {/* 1. Header Typography: Greeting, Name, Subtitle */}
        <HeroText
          greetingRef={greetingRef}
          nameRef={nameRef}
          subtitleRef={subtitleRef}
          taglineRef={taglineRef}
        />

        {/* 2. Centerpiece: Rotating Circular Text & Cartoon Portrait */}
        <div ref={portraitWrapperRef} className="mt-4 sm:mt-6 mb-6 sm:mb-8 w-full flex justify-center">
          <HeroPortrait
            portraitContainerRef={portraitContainerRef}
            rotatingTextRef={rotatingTextRef}
            floatingBadgesRef={floatingBadgesRef}
          />
        </div>

        {/* 3. Action Buttons: Download CV & GitHub */}
        <HeroButtons
          buttonsRef={buttonsRef}
          onGithubClick={handleGithubClick}
        />
      </div>

      {/* 4. Elegant Scroll Down Indicator */}
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto text-center z-10 select-none mt-12 sm:mt-14 lg:mt-16 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[11px] sm:text-[12px] font-mono text-[#5E5547] dark:text-[#889397] tracking-[0.2em] uppercase font-medium transition-colors duration-300">
          Scroll to explore
        </span>
        <button
          onClick={handleScrollToAbout}
          aria-label="Scroll to explore about section"
          className="animate-bounce p-1 text-[#1F1B17] dark:text-[#F9FBFA] hover:text-[#8C5E34] dark:hover:text-[#00ED64] transition-colors cursor-pointer"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
