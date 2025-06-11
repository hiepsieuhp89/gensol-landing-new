'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useEffect, useState } from 'react';
import { Group, Vector2, Mesh } from 'three';
import { useTheme } from 'next-themes';

export default function Model() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/blue_the_minimalistic_robot.glb');
  const { actions } = useAnimations(animations, group);
  const [mouse, setMouse] = useState(new Vector2(0, 0));
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinStartRotation, setSpinStartRotation] = useState(0);
  const [spinProgress, setSpinProgress] = useState(0);
  const [rotationOffset, setRotationOffset] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';
  
  const basePosition = { x: 4, y: 0.8, z: 0 };

  useEffect(() => {
    const actionKeys = Object.keys(actions);
    if (actionKeys.length > 0) {
      const firstAction = actions[actionKeys[0]];
      if (firstAction) {
        firstAction.play();
      }
    }

    if (group.current) {
      group.current.rotation.x = 0; 
      group.current.rotation.y = 0; 
      group.current.rotation.z = 0; 
      group.current.position.x = basePosition.x; 
      group.current.position.y = basePosition.y; 
      group.current.position.z = basePosition.z;
      
      setRotationOffset(-Math.PI / 8);
      
      group.current.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          if (child.material) {
            if (child.material.type === 'MeshStandardMaterial' || child.material.type === 'MeshPhysicalMaterial') {
              child.material.metalness = isDark 
                ? Math.min(child.material.metalness + 0.4, 1.0) 
                : Math.min(child.material.metalness + 0.2, 1.0);
              
              child.material.roughness = isDark
                ? Math.max(child.material.roughness - 0.5, 0.05) 
                : Math.max(child.material.roughness - 0.3, 0.1);
              
              child.material.envMapIntensity = isDark ? 2.5 : 1.5; 
            }
            
            if (child.material.emissive) {
              child.material.emissive.multiplyScalar(isDark ? 2.2 : 1.2); 
            }
            
            child.material.needsUpdate = true;
          }
        }
      });
    }

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMouse(new Vector2(x, y));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [actions, isDark]);

  const handleClick = (event: any) => {
    event.stopPropagation(); 
    
    if (!isSpinning && group.current) {
      setIsSpinning(true);
      setSpinStartRotation(group.current.rotation.y);
      setSpinProgress(0);
    }
  };

  useFrame((state) => {
    if (group.current) {
      const time = state.clock.getElapsedTime();
      
      group.current.position.x = basePosition.x; 
      group.current.position.y = basePosition.y + Math.sin(time) * 0.12; 
      group.current.position.z = basePosition.z; 
      
      if (isSpinning) {
        setSpinProgress(prev => {
          const newProgress = prev + 0.02; 
          
          if (newProgress >= 1) {
            setIsSpinning(false);
            const finalRotation = spinStartRotation + Math.PI * 2;
            group.current!.rotation.y = finalRotation;
            setRotationOffset(finalRotation);
            return 1;
          }
          return newProgress;
        });
        
        const easeInOut = (t: number) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
        const easedProgress = easeInOut(spinProgress);
        
        const spinRotation = spinStartRotation + (easedProgress * Math.PI * 2);
        group.current.rotation.y = spinRotation;
      } else {
        const targetRotationY = rotationOffset + (mouse.x * 0.5);
        const targetRotationX = mouse.y * 0.3;
        
        group.current.rotation.y += (targetRotationY - group.current.rotation.y) * 0.08;
        group.current.rotation.x += (targetRotationX - group.current.rotation.x) * 0.08;
      }
    }
  });

  return (
    <group ref={group}>
      <mesh
        onPointerDown={handleClick}
        position={[0, 0, 0]}
        scale={[2, 3, 2]} 
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      
      <primitive object={scene} scale={0.06} />
    </group>
  );
}

useGLTF.preload('/blue_the_minimalistic_robot.glb'); 