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
    <Canvas 
      camera={{ position: [0, 0, 8], fov: 50 }}
      shadows
      gl={{ antialias: true }}
    >
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.4} />
      
      {/* Main directional light with shadows */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Secondary fill light */}
      <directionalLight 
        position={[-5, 5, 5]} 
        intensity={0.3}
        color="#4f46e5"
      />
      
      {/* Rim light for edge highlighting */}
      <directionalLight 
        position={[0, 5, -10]} 
        intensity={0.5}
        color="#06b6d4"
      />
      
      {/* Ground plane for shadow receiving */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2, 0]} 
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
      
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