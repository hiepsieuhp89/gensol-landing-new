import React, { useEffect, useState } from "react";

interface RippleProps {
  duration?: number;
  color?: string;
}

interface RippleEffect {
  x: number;
  y: number;
  size: number;
}

export const Ripple: React.FC<RippleProps> = ({
  duration = 600,
  color = "rgba(255, 255, 255, 0.7)",
}) => {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);

  useEffect(() => {
    const handleClick = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const element = mouseEvent.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();

      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      const size = Math.max(rect.width, rect.height);
      
      setRipples((prevRipples) => [...prevRipples, { x, y, size }]);
    };

    const element = document.querySelector("[data-ripple='true']");
    if (element) {
      element.addEventListener("mousedown", handleClick);
      return () => element.removeEventListener("mousedown", handleClick);
    }
  }, []);

  useEffect(() => {
    if (ripples.length > 0) {
      const timeoutId = setTimeout(() => {
        setRipples([]);
      }, duration);

      return () => clearTimeout(timeoutId);
    }
  }, [ripples, duration]);

  return (
    <>
      {ripples.map((ripple, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            borderRadius: "50%",
            backgroundColor: color,
            opacity: "0",
            transform: "scale(0)",
            animation: `ripple ${duration}ms linear`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}; 