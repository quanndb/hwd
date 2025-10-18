"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

type SwayWrapperProps = {
  children: React.ReactNode;
  intensity?: number; // độ mạnh của rung rinh
  speed?: number; // tốc độ rung
  className?: string;
};

export default function SwayWrapper({
  children,
  intensity = 3,
  speed = 2,
  className,
}: SwayWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Dùng animation frame để tạo chuyển động tự nhiên
  useAnimationFrame((t) => {
    const el = ref.current;
    if (!el) return;

    const swayX = Math.sin((t / 1000) * speed) * intensity;
    const swayY = Math.cos((t / 2000) * speed) * (intensity / 2);

    el.style.transform = `rotate(${swayX}deg) translateY(${swayY}px)`;
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformOrigin: "bottom center", // như gốc cây
        display: "inline-block",
      }}
    >
      {children}
    </motion.div>
  );
}
