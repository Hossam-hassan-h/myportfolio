import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface BadgeProps {
  position: [number, number, number];
  title: string;
  codeSnippet: string;
  accentColor: string;
  glowColor: string;
  iconText: string;
  speed?: number;
  floatIntensity?: number;
  rotationIntensity?: number;
}

const TechCard3D: React.FC<BadgeProps> = ({
  position,
  title,
  codeSnippet,
  accentColor,
  glowColor,
  iconText,
  speed = 1.5,
  floatIntensity = 1.2,
  rotationIntensity = 0.5,
}) => {
  const meshRef = useRef<THREE.Group>(null);

  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
      position={position}
    >
      <group ref={meshRef}>
        {/* Holographic 3D Glass Badge */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.9, 0.05]} />
          <meshPhysicalMaterial
            color="#090d16"
            roughness={0.15}
            metalness={0.8}
            transmission={0.6}
            thickness={0.5}
            transparent
            opacity={0.85}
            reflectivity={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Glowing border outline */}
        <lineSegments position={[0, 0, 0.026]}>
          <edgesGeometry args={[new THREE.BoxGeometry(1.5, 0.9, 0.01)]} />
          <lineBasicMaterial color={accentColor} linewidth={1.5} transparent opacity={0.7} />
        </lineSegments>

        {/* HTML Content Projected on Badge */}
        <Html
          transform
          distanceFactor={3.2}
          position={[0, 0, 0.04]}
          className="pointer-events-none select-none"
        >
          <div
            className="w-44 p-2.5 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(5, 5, 10, 0.92))',
              boxShadow: `0 0 20px -3px ${glowColor}`,
            }}
          >
            <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: accentColor }}
                />
                <span className="text-[11px] font-bold tracking-wider uppercase text-white font-mono">
                  {title}
                </span>
              </div>
              <span
                className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10"
                style={{ color: accentColor }}
              >
                {iconText}
              </span>
            </div>
            <div className="text-[9.5px] font-mono text-slate-300 bg-black/40 p-1.5 rounded border border-white/5 truncate">
              <code>{codeSnippet}</code>
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
};

export const FloatingTechBadges: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    // Gentle collective orbit oscillation
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* 1. React Element (Top Left) */}
      <TechCard3D
        position={[-2.4, 1.8, 0.4]}
        title="React 19"
        codeSnippet="<NextGenUI motion={true} />"
        accentColor="#00f0ff"
        glowColor="rgba(0, 240, 255, 0.4)"
        iconText="UI/UX"
        speed={2}
      />

      {/* 2. Node.js / Express (Bottom Left) */}
      <TechCard3D
        position={[-2.6, -1.5, 0.8]}
        title="Node.js"
        codeSnippet="app.use(asyncPipeline());"
        accentColor="#22c55e"
        glowColor="rgba(34, 197, 94, 0.35)"
        iconText="REST/WS"
        speed={1.7}
      />

      {/* 3. MongoDB (Top Right) */}
      <TechCard3D
        position={[2.4, 1.9, 0.5]}
        title="MongoDB"
        codeSnippet="db.collection.aggregate()"
        accentColor="#10b981"
        glowColor="rgba(16, 185, 129, 0.35)"
        iconText="MERN"
        speed={1.9}
      />

      {/* 4. TypeScript / GSAP / Three.js (Bottom Right) */}
      <TechCard3D
        position={[2.5, -1.4, 0.7]}
        title="TypeScript"
        codeSnippet="type FuturisticHero = 3D;"
        accentColor="#a855f7"
        glowColor="rgba(168, 85, 247, 0.4)"
        iconText="TS / 3D"
        speed={2.2}
      />
    </group>
  );
};
