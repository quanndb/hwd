"use client";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type CloudFloatWrapperProps = {
  children: React.ReactNode;
  className?: string;
  amplitudeX?: number;
  amplitudeY?: number;
  duration?: number;
  delay?: number;
  rotate?: number;
  play?: boolean;
  /** direction of float movement */
  direction?:
    | "left"
    | "right"
    | "up"
    | "down"
    | "diagonal-left"
    | "diagonal-right";
};

export default function CloudFloatWrapper({
  children,
  className = "inline-block",
  amplitudeX = 16,
  amplitudeY = 6,
  duration = 6,
  delay = 0,
  rotate = 2,
  play = true,
  direction = "diagonal-right",
}: CloudFloatWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={{ willChange: "transform" }}>
        {children}
      </div>
    );
  }

  let animateValues: Record<string, number[]> = {};

  switch (direction) {
    case "left":
      animateValues = {
        x: [amplitudeX, -amplitudeX],
        y: [0, 0],
        rotate: [-rotate, rotate],
      };
      break;
    case "right":
      animateValues = {
        x: [-amplitudeX, amplitudeX],
        y: [0, 0],
        rotate: [-rotate, rotate],
      };
      break;
    case "up":
      animateValues = {
        x: [0, 0],
        y: [amplitudeY, -amplitudeY],
        rotate: [-rotate, rotate],
      };
      break;
    case "down":
      animateValues = {
        x: [0, 0],
        y: [-amplitudeY, amplitudeY],
        rotate: [-rotate, rotate],
      };
      break;
    case "diagonal-left":
      animateValues = {
        x: [amplitudeX, -amplitudeX],
        y: [amplitudeY, -amplitudeY],
        rotate: [-rotate, rotate],
      };
      break;
    case "diagonal-right":
    default:
      animateValues = {
        x: [-amplitudeX, amplitudeX],
        y: [-amplitudeY, amplitudeY],
        rotate: [-rotate, rotate],
      };
  }

  return (
    <motion.div
      className={className}
      style={{ willChange: "transform" }}
      animate={play ? animateValues : { x: 0, y: 0, rotate: 0 }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
