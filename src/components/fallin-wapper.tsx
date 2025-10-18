"use client";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type FallInWrapperProps = {
  children: React.ReactNode;
  className?: string;
  /** khoảng cách di chuyển (px) */
  distance?: number;
  /** thời gian animation (s) */
  duration?: number;
  /** thời gian delay trước khi bắt đầu (s) */
  delay?: number;
  /** độ nảy (0–1, càng cao càng nảy mạnh) */
  bounce?: number;
  /** bật/tắt animation */
  play?: boolean;
  /** hướng bay: "down" | "up" | "left" | "right" */
  direction?: "down" | "up" | "left" | "right";
};

/**
 * FallInWrapper
 * Giúp phần tử (chữ, hình,...) bay vào theo hướng chỉ định và nảy nhẹ.
 *
 * Ví dụ:
 * <FallInWrapper delay={0.5} direction="left">
 *   <h1 className="text-4xl font-bold text-center">Hello World</h1>
 * </FallInWrapper>
 */
export default function FallInWrapper({
  children,
  className = "inline-block",
  distance = 100,
  duration = 0.8,
  delay = 0,
  bounce = 0.3,
  play = true,
  direction = "down",
}: FallInWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Xác định hướng dịch chuyển ban đầu
  const initialOffset =
    direction === "down"
      ? { y: -distance }
      : direction === "up"
      ? { y: distance }
      : direction === "left"
      ? { x: distance }
      : { x: -distance }; // "right"

  return (
    <motion.div
      className={className}
      style={{ display: "inline-block", willChange: "transform" }}
      initial={play ? { ...initialOffset, opacity: 0 } : { opacity: 1 }}
      animate={play ? { x: 0, y: 0, opacity: 1 } : { opacity: 1 }}
      transition={{
        delay,
        duration,
        type: "spring",
        damping: 12,
        stiffness: 120,
        bounce,
      }}
    >
      {children}
    </motion.div>
  );
}
