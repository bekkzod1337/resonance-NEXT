"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = {
  green: "/Headphones/Color=green.png",
  yellow: "/Headphones/Color=yellow.png",
  red: "/Headphones/Color=red.png",
};

export default function CarouselSection() {
  const [selectedColor, setSelectedColor] = useState<"green" | "yellow" | "red">("green");

  const { leftImage, rightImage } = useMemo(() => {
    const colors: ("green" | "yellow" | "red")[] = ["green", "yellow", "red"];
    const others = colors.filter((c) => c !== selectedColor);
    return {
      leftImage: images[others[0]],
      rightImage: images[others[1]],
    };
  }, [selectedColor]); // ✅ ESLint endi jim bo‘ladi

  return (
    <section className="w-full max-w-[1280px] h-[1132px] flex flex-col items-center gap-6 py-20 mx-auto">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 w-full max-w-[860px] h-[136px]"
      >
        <h2 className="text-[56px] leading-[84px] font-semibold text-[#52483E] text-center capitalize">
          Your Style. Your Sound.
        </h2>
        <p className="text-[24px] leading-[36px] text-[#8B8782] text-center">
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative flex justify-center items-center w-full h-[660px] overflow-hidden">
        {/* Left blur image */}
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          animate={{ opacity: 0.4, x: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[420px] h-[420px] relative filter blur-[6.5625px] z-0"
        >
          <Image src={leftImage} alt="Left Headphone" fill className="object-contain" />
        </motion.div>

        {/* Center image (animated) */}
        <div className="w-[660px] h-[660px] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedColor}
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[selectedColor]}
                alt={`${selectedColor} Headphone`}
                fill
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right blur image */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 0.4, x: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[420px] h-[420px] relative filter blur-[6.5625px] z-0"
        >
          <Image src={rightImage} alt="Right Headphone" fill className="object-contain" />
        </motion.div>
      </div>

      {/* Color Options */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-8 w-full h-[128px]"
      >
        <div className="flex items-center gap-10 h-[60px]">
          {(["yellow", "green", "red"] as const).map((color) => (
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-[60px] h-[60px] rounded-full transition-colors duration-300 ${
                color === "yellow"
                  ? "bg-[#D8B74B]"
                  : color === "green"
                  ? "bg-[#94915B]"
                  : "bg-[#883D39]"
              } ${
                selectedColor === color
                  ? "border-[3px] border-[#52483E] shadow-lg"
                  : "border border-transparent"
              }`}
            />
          ))}
        </div>

        <p className="text-[24px] leading-[36px] text-[#8B8782] text-center capitalize">
          Choose a color that fits your flow.
        </p>
      </motion.div>
    </section>
  );
}
