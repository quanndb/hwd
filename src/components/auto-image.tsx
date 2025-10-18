"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type AutoImageSliderProps = {
  images: string[];
  interval?: number; // thời gian mỗi ảnh (ms)
  size?: number; // kích thước ảnh (px)
  transitionDuration?: number; // thời gian trượt (s)
};

export default function AutoImageSlider({
  images,
  interval = 3000,
  size = 150,
  transitionDuration = 1,
}: AutoImageSliderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div
      className="relative overflow-hidden rounded-full shadow-md border-4 border-amber-50"
      style={{
        width: size,
        height: size,
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{
            duration: transitionDuration,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`slide-${index}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
