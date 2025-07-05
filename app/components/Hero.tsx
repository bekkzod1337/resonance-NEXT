"use client";

import Image from "next/image";
import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-[180px] pb-[320px] w-full  max-w-[1280px] h-[936px] mx-auto isolate bg-gradient-to-b from-[#D2CDC6] to-[#F5F5F5]">
      {/* Navigation - bu joyga Header komponentini import qilib joylashtirish mumkin */}
       <Header /> 

      {/* Hero Content */}
      <div className="relative flex flex-col items-start w-full h-[344px] z-0">
        {/* Main Title */}
        <h1 className="text-[#52483E] text-[180px] leading-[172px] font-semibold text-center w-full z-[2]">
          Resonance
        </h1>

        {/* Headphone Image */}
        <div className="absolute top-[-299px] left-1/2 transform -translate-x-1/2 w-[1084px] h-[1084px] z-[1]">
          <Image
            src="/Hero/Headphone.png"
            alt="Headphones"
            fill
            className="object-contain"
          />
        </div>

        {/* Subtitle */}
        <h2 className="text-[180px] leading-[172px] font-semibold text-center w-full z-0 bg-gradient-to-t from-[#DACCBC] to-[#AFA497] bg-clip-text text-transparent">
          Aura Pro II
        </h2>
      </div>
    </section>
  );
}
