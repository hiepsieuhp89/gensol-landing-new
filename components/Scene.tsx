'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Model from './Model';
import { Html, useProgress, OrbitControls } from '@react-three/drei';

function Loader() {
  return <Html center></Html>;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <Suspense fallback={<Loader />}>
        <Model />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Suspense>
    </Canvas>
  );
} 