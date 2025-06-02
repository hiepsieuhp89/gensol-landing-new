'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useEffect, useState } from 'react';
import { Group, Vector2, Mesh } from 'three';

export default function Model() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/blue_the_minimalistic_robot.glb');
  const { actions } = useAnimations(animations, group);
  const { viewport } = useThree();
  const [mouse, setMouse] = useState(new Vector2(0, 0));
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinStartRotation, setSpinStartRotation] = useState(0);
  const [spinProgress, setSpinProgress] = useState(0);
  const [rotationOffset, setRotationOffset] = useState(0);

  useEffect(() => {
    const actionKeys = Object.keys(actions);
    if (actionKeys.length > 0) {
      const firstAction = actions[actionKeys[0]];
      if (firstAction) {
        firstAction.play();
      }
    }

    if (group.current) {
      group.current.rotation.x = 0; // Không nghiêng
      group.current.rotation.y = 0; // Hướng thẳng
      group.current.rotation.z = 0; // Không nghiêng sang bên
      group.current.position.y = 1.5; // Dịch lên trên
      group.current.position.x = -1; // Dịch sang trái
      
      // Enable shadows for all meshes in the model
      group.current.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          // Enhance material properties for better lighting
          if (child.material) {
            child.material.needsUpdate = true;
          }
        }
      });
    }

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMouse(new Vector2(x, y));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [actions]);

  // Handle click to spin
  const handleClick = () => {
    if (!isSpinning && group.current) {
      setIsSpinning(true);
      setSpinStartRotation(group.current.rotation.y);
      setSpinProgress(0);
    }
  };

  useFrame((state) => {
    if (group.current) {
      const time = state.clock.getElapsedTime();
      
      // Floating animation
      group.current.position.y = 0.8 + Math.sin(time) * 0.12;
      
      if (isSpinning) {
        // Smooth spin animation - 360 degrees over ~2 seconds
        setSpinProgress(prev => {
          const newProgress = prev + 0.015; // Much slower for smoother animation
          if (newProgress >= 1) {
            setIsSpinning(false);
            // Set the final rotation and update offset to match
            const finalRotation = spinStartRotation + Math.PI * 2;
            group.current!.rotation.y = finalRotation;
            setRotationOffset(finalRotation);
            return 1; // Ensure we end exactly at 1 full rotation
          }
          return newProgress;
        });
        
        // Smooth easing function for more natural movement
        const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const easedProgress = easeInOut(spinProgress);
        
        // Smooth spin animation - exactly one full rotation
        const spinRotation = spinStartRotation + (easedProgress * Math.PI * 2);
        group.current.rotation.y = spinRotation;
      } else {
        // Mouse tracking - make robot look towards mouse (only when not spinning)
        const targetRotationY = rotationOffset + (mouse.x * 0.3); // Add offset to maintain position
        const targetRotationX = mouse.y * 0.2; // Slight vertical tracking
        
        // Smooth interpolation for natural movement
        group.current.rotation.y += (targetRotationY - group.current.rotation.y) * 0.05;
        group.current.rotation.x += (targetRotationX - group.current.rotation.x) * 0.05;
      }
    }
  });

  return (
    <group ref={group} onClick={handleClick}>
      <primitive object={scene} scale={0.07} />
    </group>
  );
}

useGLTF.preload('/blue_the_minimalistic_robot.glb'); 