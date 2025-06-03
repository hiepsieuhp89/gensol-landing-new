'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useEffect, useState } from 'react';
import { Group, Vector2, Mesh } from 'three';

export default function Model() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/blue_the_minimalistic_robot.glb');
  const { actions } = useAnimations(animations, group);
  const [mouse, setMouse] = useState(new Vector2(0, 0));
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinStartRotation, setSpinStartRotation] = useState(0);
  const [spinProgress, setSpinProgress] = useState(0);
  const [rotationOffset, setRotationOffset] = useState(0);
  
  // Fixed base position - không thay đổi khi scroll
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
      group.current.rotation.x = 0; // Không nghiêng
      group.current.rotation.y = 0; // Hướng về bên trái ban đầu
      group.current.rotation.z = 0; // Không nghiêng sang bên
      group.current.position.x = basePosition.x; // Dịch sang phải để align với layout mới
      group.current.position.y = basePosition.y; // Vị trí cố định
      group.current.position.z = basePosition.z;
      
      // Set initial rotation offset to match the starting position
      setRotationOffset(-Math.PI / 8);
      
      // Enable shadows for all meshes in the model
      group.current.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          // Enhance material properties for better lighting and brightness
          if (child.material) {
            // Make material more reflective and brighter
            if (child.material.type === 'MeshStandardMaterial' || child.material.type === 'MeshPhysicalMaterial') {
              child.material.metalness = Math.min(child.material.metalness + 0.2, 1.0);
              child.material.roughness = Math.max(child.material.roughness - 0.3, 0.1);
              child.material.envMapIntensity = 1.5;
            }
            
            // Increase emissive for self-illumination
            if (child.material.emissive) {
              child.material.emissive.multiplyScalar(1.2);
            }
            
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

  // Handle click to spin - chỉ cho phép 1 vòng xoay mỗi lần click
  const handleClick = (event: any) => {
    console.log('Model clicked!', { isSpinning, event }); // Debug log
    event.stopPropagation(); // Prevent event bubbling
    
    // Chỉ cho phép click khi không đang xoay
    if (!isSpinning && group.current) {
      console.log('Starting spin animation'); // Debug log
      setIsSpinning(true);
      setSpinStartRotation(group.current.rotation.y);
      setSpinProgress(0);
    }
  };

  useFrame((state) => {
    if (group.current) {
      const time = state.clock.getElapsedTime();
      
      // Floating animation - giữ vị trí cố định, chỉ thay đổi Y một chút
      group.current.position.x = basePosition.x; // Giữ X cố định
      group.current.position.y = basePosition.y + Math.sin(time) * 0.12; // Floating nhẹ
      group.current.position.z = basePosition.z; // Giữ Z cố định
      
      if (isSpinning) {
        // Tăng tốc độ xoay để hoàn thành 1 vòng trong khoảng 1.5 giây
        setSpinProgress(prev => {
          const newProgress = prev + 0.02; // Tăng tốc độ từ 0.015 lên 0.02
          
          if (newProgress >= 1) {
            // Kết thúc animation - đảm bảo xoay đúng 1 vòng
            setIsSpinning(false);
            const finalRotation = spinStartRotation + Math.PI * 2;
            group.current!.rotation.y = finalRotation;
            setRotationOffset(finalRotation);
            return 1;
          }
          return newProgress;
        });
        
        // Smooth easing function cho chuyển động tự nhiên hơn
        const easeInOut = (t: number) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
        const easedProgress = easeInOut(spinProgress);
        
        // Xoay đúng 1 vòng 360 độ (2π radians)
        const spinRotation = spinStartRotation + (easedProgress * Math.PI * 2);
        group.current.rotation.y = spinRotation;
      } else {
        // Mouse tracking - chỉ hoạt động khi không đang xoay
        const targetRotationY = rotationOffset + (mouse.x * 0.5);
        const targetRotationX = mouse.y * 0.3;
        
        // Interpolation mượt mà
        group.current.rotation.y += (targetRotationY - group.current.rotation.y) * 0.08;
        group.current.rotation.x += (targetRotationX - group.current.rotation.x) * 0.08;
      }
    }
  });

  return (
    <group ref={group}>
      {/* Invisible clickable mesh around the model */}
      <mesh
        onPointerDown={handleClick}
        position={[0, 0, 0]}
        scale={[2, 3, 2]} // Adjust size to cover the robot
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      
      <primitive object={scene} scale={0.06} />
    </group>
  );
}

useGLTF.preload('/blue_the_minimalistic_robot.glb'); 