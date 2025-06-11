'use client';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Model from './Model';
import { Html, useProgress, OrbitControls } from '@react-three/drei';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function Loader() {
  return <Html center></Html>;
}

export default function Scene() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dynamic lighting based on theme
  const isDark = mounted && theme === 'dark';
  
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Professional background effects - full screen */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900/50 via-blue-900/20 to-slate-800/50' 
            : 'bg-gradient-to-br from-blue-50/80 via-white/60 to-cyan-50/80'
        }`} />
        
        {/* Animated gradient orbs */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          isDark 
            ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20' 
            : 'bg-gradient-to-r from-blue-200/40 to-cyan-200/40'
        }`} />
        
        <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-500/15 to-blue-500/15' 
            : 'bg-gradient-to-r from-purple-200/30 to-blue-200/30'
        }`} />
        
        {/* Grid pattern - full screen */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px)]'
        } bg-[size:60px_60px]`} />
        
        {/* Radial gradient overlay for depth */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-radial-gradient from-transparent via-slate-900/10 to-slate-900/30' 
            : 'bg-radial-gradient from-transparent via-white/20 to-blue-50/40'
        }`} />
      </div>

      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        shadows
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
        dpr={[1, 2]}
        className="pointer-events-auto"
      >
        {/* Dynamic lighting based on theme */}
        <ambientLight intensity={isDark ? 0.8 : 0.9} />
        
        {/* Main directional light with enhanced settings for light theme */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={isDark ? 3.0 : 2.8}
          castShadow
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={50}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
          shadow-bias={-0.0001}
        />
        
        {/* Secondary fill light - stronger for light theme */}
        <directionalLight 
          position={[-5, 5, 5]} 
          intensity={isDark ? 1.0 : 1.2}
          color={isDark ? "#4f46e5" : "#3b82f6"}
        />
        
        {/* Rim light for edge highlighting - enhanced for light theme */}
        <directionalLight 
          position={[0, 5, -10]} 
          intensity={isDark ? 1.2 : 1.4}
          color={isDark ? "#06b6d4" : "#0ea5e9"}
        />
        
        {/* Additional top light for light theme */}
        {!isDark && (
          <directionalLight 
            position={[0, 15, 0]} 
            intensity={0.6}
            color="#f0f9ff"
          />
        )}
        
        {/* Additional front light to brighten the model */}
        <directionalLight 
          position={[0, 0, 10]} 
          intensity={isDark ? 0.8 : 0.8}
          color={isDark ? "#ffffff" : "#ffffff"}
        />
        
        {/* Point light for extra brightness */}
        <pointLight 
          position={[5, 5, 5]} 
          intensity={isDark ? 0.8 : 1.0}
          color="#ffffff"
          distance={20}
        />
        
        {/* Ground plane for shadow receiving - larger to prevent overflow */}
        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -2, 0]} 
          receiveShadow
        >
          <planeGeometry args={[50, 50]} />
          <shadowMaterial 
            opacity={isDark ? 0.4 : 0.2} 
            color={isDark ? "#000000" : "#1e293b"}
          />
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
    </div>
  );
} 