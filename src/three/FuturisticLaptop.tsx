import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export const FuturisticLaptop: React.FC = () => {
  const laptopRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (laptopRef.current) {
      // Subtle organic breathing oscillation
      laptopRef.current.position.y = Math.sin(t * 1.2) * 0.08;
      laptopRef.current.rotation.x = 0.15 + Math.sin(t * 0.8) * 0.03;
    }
    if (screenGlowRef.current) {
      screenGlowRef.current.intensity = 2.0 + Math.sin(t * 3.5) * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={laptopRef} position={[0, -0.2, 0]} rotation={[0.15, -0.28, 0]}>
        
        {/* LAPTOP BASE */}
        <RoundedBox args={[3.4, 0.12, 2.3]} radius={0.06} smoothness={4} position={[0, 0, 0]}>
          <meshPhysicalMaterial
            color="#0f1422"
            metalness={0.9}
            roughness={0.2}
            clearcoat={0.6}
            reflectivity={0.9}
          />
        </RoundedBox>

        {/* Trackpad */}
        <mesh position={[0, 0.065, 0.6]}>
          <boxGeometry args={[1.2, 0.01, 0.8]} />
          <meshStandardMaterial color="#1a2035" roughness={0.4} metalness={0.7} />
        </mesh>

        {/* Keyboard area recess */}
        <mesh position={[0, 0.065, -0.3]}>
          <boxGeometry args={[3.0, 0.01, 1.3]} />
          <meshStandardMaterial color="#080b12" roughness={0.6} metalness={0.5} />
        </mesh>

        {/* Cyber Neon Accent Edge on Base */}
        <mesh position={[0, -0.04, 1.15]}>
          <boxGeometry args={[3.3, 0.02, 0.02]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>

        {/* LAPTOP LID / SCREEN ASSEMBLY */}
        <group position={[0, 0.06, -1.14]} rotation={[-0.42, 0, 0]}>
          {/* Outer Lid Frame */}
          <RoundedBox args={[3.4, 2.2, 0.08]} radius={0.06} smoothness={4} position={[0, 1.08, 0]}>
            <meshPhysicalMaterial
              color="#0d111d"
              metalness={0.92}
              roughness={0.18}
              clearcoat={0.8}
            />
          </RoundedBox>

          {/* Inner Screen Display Glass */}
          <mesh position={[0, 1.08, 0.042]}>
            <planeGeometry args={[3.2, 2.0]} />
            <meshBasicMaterial color="#02040a" />
          </mesh>

          {/* Screen Light illuminating workspace */}
          <pointLight
            ref={screenGlowRef}
            position={[0, 1.1, 0.6]}
            color="#00f0ff"
            distance={4.5}
            decay={2}
            intensity={2.2}
          />
          <pointLight
            position={[0, 0.4, 0.8]}
            color="#a855f7"
            distance={3.5}
            decay={2}
            intensity={1.5}
          />

          {/* Futuristic Code IDE Screen UI via HTML */}
          <Html
            transform
            distanceFactor={2.4}
            position={[0, 1.08, 0.05]}
            className="pointer-events-none select-none"
          >
            <div className="w-[335px] h-[210px] bg-[#070913]/95 rounded-lg border border-cyan-500/30 p-2.5 font-mono text-xs flex flex-col justify-between overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.25)]">
              {/* Window Bar */}
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-1.5 mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[10px] text-slate-400 font-sans tracking-wide">
                    hossam-portfolio.tsx
                  </span>
                </div>
                <span className="text-[9px] text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">
                  MERN • Active
                </span>
              </div>

              {/* Code Editor Body */}
              <div className="space-y-1 text-[10.5px] leading-relaxed text-slate-300">
                <p>
                  <span className="text-purple-400 font-semibold">const</span>{' '}
                  <span className="text-cyan-300 font-medium">developer</span> = {'{'}
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-400">'Hossam Hassan'</span>,
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-cyan-400">'Frontend MERN Specialist'</span>,
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">experience:</span>{' '}
                  <span className="text-amber-300">'Cinematic & Scalable'</span>,
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400">'Building Next-Gen UI ⚡'</span>
                </p>
                <p>{'};'}</p>
              </div>

              {/* Terminal Footer */}
              <div className="mt-1 pt-1.5 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Ready to innovate
                </span>
                <span className="text-purple-400 font-medium">Vite + React 19</span>
              </div>
            </div>
          </Html>
        </group>

        {/* Ambient Ring / Hologram Pedestal beneath laptop */}
        <group position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh>
            <ringGeometry args={[1.8, 2.2, 64]} />
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} side={THREE.DoubleSide} />
          </mesh>
          <mesh>
            <ringGeometry args={[2.4, 2.45, 64]} />
            <meshBasicMaterial color="#a855f7" transparent opacity={0.25} side={THREE.DoubleSide} />
          </mesh>
        </group>

      </group>
    </Float>
  );
};
