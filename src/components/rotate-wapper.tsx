"use client";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type Direction = "clockwise" | "counterclockwise";

type RotateInWrapperProps = {
  children: React.ReactNode;
  className?: string;
  /** Góc xuất hiện */
  from?: Corner;
  /** Góc xoay ban đầu (deg) */
  rotate?: number;
  /** Chiều xoay */
  rotationDirection?: Direction;
  /** Khoảng dịch chuyển khi bắt đầu (px) */
  offset?: number;
  /** Thời gian animation (s) */
  duration?: number;
  /** Thời gian delay trước khi bắt đầu (s) */
  delay?: number;
  /** Bật/tắt animation */
  play?: boolean;
};

/**
 * RotateInWrapper
 * Phần tử xoay và trượt từ một góc màn hình vào, với chiều xoay tuỳ chọn.
 */
export default function RotateInWrapper({
  children,
  className = "inline-block",
  from = "top-left",
  rotate = 45,
  rotationDirection = "clockwise",
  offset = 120,
  duration = 0.8,
  delay = 0,
  play = true,
}: RotateInWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Xác định hướng dịch chuyển ban đầu theo góc
  const position = {
    "top-left": { x: -offset, y: -offset },
    "top-right": { x: offset, y: -offset },
    "bottom-left": { x: -offset, y: offset },
    "bottom-right": { x: offset, y: offset },
  }[from];

  // Xác định chiều xoay
  const initialRotate = rotationDirection === "clockwise" ? rotate : -rotate;

  return (
    <motion.div
      className={className}
      style={{ display: "inline-block", willChange: "transform" }}
      initial={
        play
          ? { ...position, opacity: 0, rotate: initialRotate }
          : { x: 0, y: 0, rotate: 0, opacity: 1 }
      }
      animate={
        play
          ? { x: 0, y: 0, rotate: 0, opacity: 1 }
          : { x: 0, y: 0, rotate: 0, opacity: 1 }
      }
      transition={{
        delay,
        duration,
        type: "spring",
        damping: 14,
        stiffness: 120,
      }}
    >
      {children}
    </motion.div>
  );
}
