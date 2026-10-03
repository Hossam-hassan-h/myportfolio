import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface HeroAnimationElements {
  background: HTMLElement | null;
  greeting: HTMLElement | null;
  name: HTMLElement | null;
  subtitle: HTMLElement | null;
  tagline: HTMLElement | null;
  portrait: HTMLElement | null;
  rotatingText: SVGElement | null;
  buttons: HTMLElement | null;
  floatingEffects: HTMLElement | null;
}

/**
 * Snappy Cinematic Hero entrance animation sequence:
 * 1. Background (0.0s)
 * 2. Greeting (0.15s)
 * 3. Name (0.3s)
 * 4. Portrait (0.65s)
 * 5. Rotating text (0.8s)
 * 6. Buttons (0.95s)
 * 7. Floating ambient effects (1.1s)
 */
export const initHeroEntrance = (
  containerRef: HTMLElement | null,
  elements: HeroAnimationElements
) => {
  if (!containerRef) return null;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
  });

  // Step 1: Background (0.0s)
  tl.fromTo(
    containerRef,
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: 'power2.inOut' },
    0
  );

  if (elements.background) {
    tl.fromTo(
      elements.background,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
      0.05
    );
  }

  // Step 2: Greeting (0.15s)
  if (elements.greeting) {
    tl.fromTo(
      elements.greeting,
      { y: 15, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
      0.15
    );
  }

  // Step 3: Name (0.3s)
  if (elements.name) {
    tl.fromTo(
      elements.name,
      {
        y: 25,
        opacity: 0,
        filter: 'blur(8px)',
        scale: 0.97,
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.7,
        ease: 'expo.out',
      },
      0.3
    );
  }

  // Subtitle & Tagline (0.45s)
  if (elements.subtitle) {
    tl.fromTo(
      elements.subtitle,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      0.45
    );
  }

  if (elements.tagline) {
    tl.fromTo(
      elements.tagline,
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      0.55
    );
  }

  // Step 4: Portrait (0.65s)
  if (elements.portrait) {
    tl.fromTo(
      elements.portrait,
      {
        scale: 0.75,
        opacity: 0,
        filter: 'blur(8px)',
      },
      {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.75,
        ease: 'back.out(1.4)',
      },
      0.65
    );
  }

  // Step 5: Rotating Text (0.8s)
  if (elements.rotatingText) {
    tl.fromTo(
      elements.rotatingText,
      {
        opacity: 0,
        scale: 0.85,
        rotate: -25,
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      0.8
    );
  }

  // Step 6: Buttons (0.95s)
  if (elements.buttons) {
    tl.fromTo(
      elements.buttons,
      {
        y: 20,
        opacity: 0,
        scale: 0.92,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.65,
        ease: 'back.out(1.5)',
      },
      0.95
    );
  }

  // Step 7: Floating Ambient Effects (1.1s)
  if (elements.floatingEffects) {
    tl.fromTo(
      elements.floatingEffects,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.65,
        ease: 'expo.out',
      },
      1.1
    );
  }

  return tl;
};

export const initHeroScroll = (
  heroSection: HTMLElement | null,
  heroContent: HTMLElement | null,
  portraitWrapper: HTMLElement | null
) => {
  if (!heroSection || !heroContent) return null;

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: '15% top',
      end: 'bottom top',
      scrub: 1.2,
      pin: false,
    },
  });

  scrollTl.to(
    heroContent,
    {
      opacity: 0.15,
      scale: 0.96,
      y: -40,
      ease: 'none',
    },
    0
  );

  if (portraitWrapper) {
    scrollTl.to(
      portraitWrapper,
      {
        y: 30,
        scale: 0.94,
        opacity: 0.35,
        ease: 'none',
      },
      0
    );
  }

  return scrollTl;
};
