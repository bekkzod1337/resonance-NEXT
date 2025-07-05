"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";

export default function CarouselSection() {
  const [selectedColor, setSelectedColor] = useState<"green" | "yellow" | "red">("green");

  const images = {
    green: "/Headphones/Color=green.png",
    yellow: "/Headphones/Color=yellow.png",
    red: "/Headphones/Color=red.png",
  };

  // Dinamik blur image'lar
  const { leftImage, rightImage } = useMemo(() => {
    const colors: ("green" | "yellow" | "red")[] = ["green", "yellow", "red"];
    const others = colors.filter((c) => c !== selectedColor);
    return {
      leftImage: images[others[0]],
      rightImage: images[others[1]],
    };
  }, [selectedColor]);

  return (
    <section className="w-full max-w-[1280px] h-[1132px] flex flex-col items-center gap-6 py-20 mx-auto">
      {/* Text */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[860px] h-[136px]">
        <h2 className="text-[56px] leading-[84px] font-semibold text-[#52483E] text-center capitalize">
          Your Style. Your Sound.
        </h2>
        <p className="text-[24px] leading-[36px] text-[#8B8782] text-center">
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex justify-center items-center w-full h-[660px]">
        {/* Left blur image */}
        <div className="w-[420px] h-[420px] relative filter blur-[6.5625px] z-0">
          <Image
            src={leftImage}
            alt="Left Headphone"
            fill
            className="object-contain"
          />
        </div>

        {/* Center image (active) */}
        <div className="w-[660px] h-[660px] relative z-10">
          <Image
            src={images[selectedColor]}
            alt={`${selectedColor} Headphone`}
            fill
            className="object-contain transition-all duration-500"
          />
        </div>

        {/* Right blur image */}
        <div className="w-[420px] h-[420px] relative filter blur-[6.5625px] z-0">
          <Image
            src={rightImage}
            alt="Right Headphone"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Color Options */}
      <div className="flex flex-col items-center gap-8 w-full h-[128px]">
        {/* Color Buttons */}
        <div className="flex items-center gap-10 h-[60px]">
          {(["yellow", "green", "red"] as const).map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-[60px] h-[60px] rounded-full transition ${
                color === "yellow"
                  ? "bg-[#D8B74B]"
                  : color === "green"
                  ? "bg-[#94915B]"
                  : "bg-[#883D39]"
              } ${
                selectedColor === color ? "border-[2px] border-[#52483E]" : "border-transparent"
              }`}
            />
          ))}
        </div>

        {/* Color Title */}
        <p className="text-[24px] leading-[36px] text-[#8B8782] text-center capitalize">
          Choose a color that fits your flow.
        </p>
      </div>
    </section>
  );
}
