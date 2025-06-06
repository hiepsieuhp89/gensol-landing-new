"use client";

import { useEffect, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

type CounterProps = {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export default function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
}: CounterProps) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from.toFixed(decimals));
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const controls = animate(count, to, {
      duration,
      onUpdate(value) {
        setDisplay(value.toFixed(decimals));
      },
    });

    return controls.stop;
  }, [count, to, duration, decimals]);

  // Show initial value during SSR and before animation starts
  const displayValue = hasMounted ? display : from.toFixed(decimals);

  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
