import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SiNodedotjs, SiReact } from 'react-icons/si';

interface HeroPortraitProps {
  portraitContainerRef: React.RefObject<HTMLDivElement | null>;
  rotatingTextRef: React.RefObject<SVGSVGElement | null>;
  floatingBadgesRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  portraitContainerRef,
  rotatingTextRef,
  floatingBadgesRef,
}) => {
  const innerSpinRef = useRef<SVGGElement>(null);
  const badgeLeftRef = useRef<HTMLDivElement>(null);
  const badgeRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Continuous silky smooth rotation for circular text (30s per cycle)
    const rotateTween = gsap.to(innerSpinRef.current, {
      rotation: 360,
      duration: 30,
      ease: 'none',
      repeat: -1,
      transformOrigin: '250px 250px',
    });

    // Subtle floating motions for flanking chips
    const floatLeft = gsap.to(badgeLeftRef.current, {
      y: -6,
      duration: 3.4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    const floatRight = gsap.to(badgeRightRef.current, {
      y: 6,
      duration: 3.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 0.5,
    });

    return () => {
      rotateTween.kill();
      floatLeft.kill();
      floatRight.kill();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center select-none w-[260px] h-[260px] min-[400px]:w-[285px] min-[400px]:h-[285px] sm:w-[325px] sm:h-[325px] md:w-[355px] md:h-[355px] mx-auto">
      {/* 1. Multi-layered Ambient Glow Backdrop */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        {/* Core Warm Glow */}
        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#8C5E34]/15 via-[#BFB195]/20 to-transparent dark:from-[#00ED64]/15 dark:via-[#00684A]/20 dark:to-transparent blur-3xl opacity-70 transition-colors duration-500" />
        {/* Secondary Deep Orbit Ring */}
        <div className="absolute w-[98%] h-[98%] rounded-full border border-[rgba(31,27,23,0.14)] dark:border-[rgba(0,237,100,0.15)] transition-colors duration-300" />
        <div className="absolute w-[110%] h-[110%] rounded-full border border-dashed border-[rgba(31,27,23,0.14)] dark:border-[rgba(0,237,100,0.12)] transition-colors duration-300" />
      </div>

      {/* 2. Rotating Circular Text (SVG with textPath) */}
      <svg
        ref={rotatingTextRef}
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
      >
        <defs>
          {/* Circular path centered at 250, 250 with radius 215 */}
          <path
            id="heroTextCircle"
            d="M 250, 250 m -215, 0 a 215,215 0 1,1 430,0 a 215,215 0 1,1 -430,0"
          />
          {/* Warm Muted Text Gradient (Light Mode) */}
          <linearGradient id="circleTextGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5E5547" />
            <stop offset="50%" stopColor="#8C5E34" />
            <stop offset="100%" stopColor="#5E5547" />
          </linearGradient>
          {/* Emerald Glow Text Gradient (Dark Mode) */}
          <linearGradient id="circleTextGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#889397" />
            <stop offset="50%" stopColor="#00ED64" />
            <stop offset="100%" stopColor="#889397" />
          </linearGradient>
        </defs>

        {/* Outer subtle orbital guideline */}
        <circle
          cx="250"
          cy="250"
          r="234"
          fill="none"
          className="stroke-[rgba(31,27,23,0.14)] dark:stroke-[rgba(0,237,100,0.15)] transition-colors duration-300"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Inner rotating group containing text */}
        <g ref={innerSpinRef} className="origin-[250px_250px]">
          <text
            className="text-[12.8px] font-mono tracking-[0.26em] uppercase font-bold fill-[url(#circleTextGradientLight)] dark:fill-[url(#circleTextGradientDark)] transition-colors duration-300"
          >
            <textPath
              href="#heroTextCircle"
              startOffset="0%"
              textLength="1350"
              lengthAdjust="spacing"
            >
              FULL STACK DEVELOPER • SOFTWARE ENGINEER • REACT DEVELOPER • NODE.JS • MERN STACK • BACKEND SPECIALIST • 
            </textPath>
          </text>
        </g>
      </svg>

      {/* 3. Central Cartoon Portrait Pod */}
      <div
        ref={portraitContainerRef}
        className="relative z-10 w-[67%] h-[67%] rounded-full p-[2.5px] bg-gradient-to-b from-[#8C5E34] via-[#4A3B2E] to-[#1F1B17] dark:from-[#00ED64] dark:via-[#00684A] dark:to-[#0C2331] shadow-[0_12px_35px_rgba(60,45,25,0.22)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-[1.02]"
      >
        {/* Inner Rim & Mask */}
        <div className="w-full h-full rounded-full overflow-hidden bg-[#1F1B17] relative group">
          {/* Depth Gradient Overlay behind head */}
          <div className="absolute inset-0 bg-radial from-[#8C5E34]/15 via-transparent to-[#1F1B17]/60 dark:from-[#00ED64]/15 dark:via-transparent dark:to-[#001E2B]/70 pointer-events-none z-1" />

          {/* Cartoon Portrait of Hossam Hassan */}
          <img
            src="/hero-cartoon.jpg"
            alt="Hossam Hassan - Cartoon Portrait"
            className="w-full h-full object-cover object-[center_20%] scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
            loading="eager"
            fetchPriority="high"
          />

          {/* Vignette Inner Shadow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(31,27,23,0.7)] pointer-events-none z-2" />
          
          {/* Glass Specular Sheen */}
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/15 via-transparent to-transparent rotate-45 pointer-events-none opacity-40" />
        </div>
      </div>

      {/* 4. Flanking Ambient Tech Badges (Cinematic Left & Right placement) */}
      <div ref={floatingBadgesRef} className="absolute inset-0 pointer-events-none z-20">
        {/* Left Flank Chip: Node.js (visible on sm+) */}
        <div
          ref={badgeLeftRef}
          className="hidden sm:flex absolute top-1/2 -left-8 md:-left-12 -translate-y-1/2 pointer-events-auto"
        >
          <div className="bg-white/95 dark:bg-[#0C2331]/95 px-3 py-1.5 rounded-xl border border-slate-200/90 dark:border-[rgba(255,255,255,0.10)] shadow-[0_4px_16px_rgba(0,30,43,0.06)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:border-[#00684A]/40 dark:hover:border-[#00ED64]/40 transition-all duration-300 group cursor-default backdrop-blur-md">
            <div className="w-5 h-5 rounded-lg bg-[#00684A]/10 dark:bg-[#00ED64]/15 flex items-center justify-center text-[#00684A] dark:text-[#00ED64] group-hover:scale-110 transition-transform">
              <SiNodedotjs className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10.5px] font-bold text-[#1F1B17] dark:text-[#F9FBFA] tracking-wide">Node.js</span>
              <span className="text-[8.5px] font-mono text-[#5E5547] dark:text-[#889397] -mt-0.5">Backend Core</span>
            </div>
          </div>
        </div>

        {/* Right Flank Chip: React.js (visible on sm+) */}
        <div
          ref={badgeRightRef}
          className="hidden sm:flex absolute top-1/2 -right-8 md:-right-12 -translate-y-1/2 pointer-events-auto"
        >
          <div className="bg-[#D9CCB4] dark:bg-[#0C2331]/95 px-3 py-1.5 rounded-xl border border-[#BFB195] dark:border-[rgba(255,255,255,0.10)] shadow-[0_10px_28px_rgba(60,45,25,0.18)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:border-[#8C5E34] dark:hover:border-[#00ED64]/40 transition-all duration-300 group cursor-default backdrop-blur-md">
            <div className="w-5 h-5 rounded-lg bg-[#E6DBC6] dark:bg-[#001E2B] border border-[#BFB195]/40 dark:border-[#00ED64]/30 flex items-center justify-center text-[#1F1B17] dark:text-[#00ED64] group-hover:scale-110 transition-transform">
              <SiReact className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10.5px] font-bold text-[#1F1B17] dark:text-[#F9FBFA] tracking-wide">React.js</span>
              <span className="text-[8.5px] font-mono text-[#5E5547] dark:text-[#889397] -mt-0.5">Frontend Core</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
