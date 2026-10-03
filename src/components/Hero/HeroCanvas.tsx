import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { DeveloperScene } from '../../three/DeveloperScene';

interface HeroCanvasProps {
  canvasRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ canvasRef }) => {
  return (
    <div
      ref={canvasRef}
      className="w-full h-[450px] sm:h-[550px] lg:h-[650px] xl:h-[720px] relative flex items-center justify-center pointer-events-auto select-none"
    >
      {/* Radial Glow Under Canvas */}
      <div className="absolute inset-0 bg-radial from-cyan-500/15 via-purple-600/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true,
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <DeveloperScene />
        </Suspense>
      </Canvas>
    </div>
  );
};
