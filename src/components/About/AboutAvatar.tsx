import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const AboutAvatar: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="w-full flex items-start justify-center select-none"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] h-auto rounded-3xl bg-[#D9CCB4] dark:bg-[#0C2331] border border-[rgba(31,27,23,0.14)] dark:border-[rgba(255,255,255,0.08)] shadow-[0_10px_28px_rgba(60,45,25,0.18),0_2px_6px_rgba(60,45,25,0.10)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.6)] p-5 sm:p-6 flex flex-col gap-5 transition-colors duration-300"
      >
        {/* Photo */}
        <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[rgba(31,27,23,0.14)] dark:border-[rgba(255,255,255,0.10)] shrink-0 transition-colors duration-300">
          <img
            src="/about-real.jpg"
            alt="Hossam Hassan - Professional Profile Photo"
            className="block w-full h-full object-cover object-[center_15%]"
            loading="lazy"
          />
        </div>

        {/* Name + subtitle (inside the card) */}
        <div className="flex flex-col items-center gap-2 text-center px-1 pb-1 min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold leading-tight text-[#1F1B17] dark:text-[#F9FBFA] font-['Outfit',sans-serif] tracking-tight break-words transition-colors duration-300">
            Hossam Hassan
          </h3>
          <p className="text-xs sm:text-sm font-mono font-bold leading-snug text-[#8C5E34] dark:text-[#00ED64] break-words transition-colors duration-300">
            Full-Stack Software Engineer
          </p>
        </div>
      </motion.div>
    </div>
  );
};