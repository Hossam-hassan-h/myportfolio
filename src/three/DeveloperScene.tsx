import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { FuturisticLaptop } from './FuturisticLaptop';
import { FloatingTechBadges } from './FloatingTechBadges';
import { GlowingParticles } from './GlowingParticles';

export const DeveloperScene: React.FC = () => {
  const sceneGroupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!sceneGroupRef.current) return;

    // Smooth cursor-driven 3D parallax with inertia
    const targetRotY = pointer.x * 0.45;
    const targetRotX = -pointer.y * 0.3;
    const targetPosX = pointer.x * 0.35;
    const targetPosY = pointer.y * 0.25;

    sceneGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      sceneGroupRef.current.rotation.y,
      targetRotY,
      0.05
    );
    sceneGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      sceneGroupRef.current.rotation.x,
      targetRotX,
      0.05
    );
    sceneGroupRef.current.position.x = THREE.MathUtils.lerp(
      sceneGroupRef.current.position.x,
      targetPosX,
      0.05
    );
    sceneGroupRef.current.position.y = THREE.MathUtils.lerp(
      sceneGroupRef.current.position.y,
      targetPosY,
      0.05
    );
  });

  return (
    <>
      {/* Studio Lighting */}
      <ambientLight intensity={0.6} />
      
      {/* Primary Key Light (Electric Blue) */}
      <directionalLight
        position={[6, 8, 7]}
        intensity={2.2}
        color="#00f0ff"
      />

      {/* Secondary Fill Light (Purple Glow) */}
      <directionalLight
        position={[-6, -4, 5]}
        intensity={1.8}
        color="#a855f7"
      />

      {/* Rim / Back Light */}
      <spotLight
        position={[0, 10, -5]}
        intensity={3.5}
        color="#38bdf8"
        angle={0.6}
        penumbra={1}
      />

      {/* Glowing Starfield Particles */}
      <GlowingParticles count={110} />

      {/* Main Interactive 3D Developer Group */}
      <group ref={sceneGroupRef}>
        <FuturisticLaptop />
        <FloatingTechBadges />
      </group>
    </>
  );
};
