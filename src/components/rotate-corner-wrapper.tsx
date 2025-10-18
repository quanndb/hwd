"use client";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type RotateInCornerWrapperProps = {
  children: React.ReactNode;
  className?: string;
  /** Góc xuất phát: top-left | top-right | bottom-left | bottom-right */
  corner?: Corner;
  /** Khoảng cách di chuyển (px) */
  distance?: number;
  /** Góc xoay (độ) khi xuất hiện */
  rotation?: number;
  /** Thời gian animation (s) */
  duration?: number;
  /** Thời gian delay trước khi bắt đầu (s) */
  delay?: number;
  /** Độ nảy (0–1, càng cao càng nảy mạnh) */
  bounce?: number;
  /** Bật/tắt animation */
  play?: boolean;
};

/**
 * RotateInCornerWrapper
 * Bay ra từ 1 góc màn hình, xoay nhẹ và dừng lại mượt mà.
 *
 * Ví dụ:
 * <RotateInCornerWrapper
 *   corner="bottom-right"
 *   rotation={45}
 *   distance={150}
 *   delay={0.3}
 * >
 *   <h1 className="text-4xl font-bold">Hello Corner!</h1>
 * </RotateInCornerWrapper>
 */
export default function RotateInCornerWrapper({
  children,
  className = "inline-block",
  corner = "top-left",
  distance = 150,
  rotation = 45,
  duration = 1,
  delay = 0,
  bounce = 0.2,
  play = true,
}: RotateInCornerWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Xác định hướng di chuyển ban đầu theo góc
  const getInitialOffset = (corner: Corner) => {
    switch (corner) {
      case "top-left":
        return { x: -distance, y: -distance };
      case "top-right":
        return { x: distance, y: -distance };
      case "bottom-left":
        return { x: -distance, y: distance };
      case "bottom-right":
      default:
        return { x: distance, y: distance };
    }
  };

  const initialOffset = getInitialOffset(corner);

  return (
    <motion.div
      className={className}
      style={{ display: "inline-block", willChange: "transform" }}
      initial={
        play
          ? { ...initialOffset, opacity: 0, rotate: rotation }
          : { x: 0, y: 0, opacity: 1, rotate: 0 }
      }
      animate={
        play
          ? { x: 0, y: 0, opacity: 1, rotate: 0 }
          : { x: 0, y: 0, opacity: 1, rotate: 0 }
      }
      transition={{
        delay,
        duration,
        type: "spring",
        damping: 14,
        stiffness: 80,
        bounce,
      }}
    >
      {children}
    </motion.div>
  );
}
