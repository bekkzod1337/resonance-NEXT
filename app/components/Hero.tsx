"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-[180px] pb-[320px] w-full max-w-[1280px] h-[936px] mx-auto isolate bg-gradient-to-b from-[#D2CDC6] to-[#F5F5F5] overflow-hidden">
      <Header />

      {/* Hero Content */}
      <div className="relative flex flex-col items-start w-full h-[344px] z-10">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#52483E] text-[180px] leading-[172px] font-semibold text-center w-full z-20"
        >
          Resonance
        </motion.h1>

        {/* Headphone Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-[-299px] left-1/2 transform -translate-x-1/2 w-[1084px] h-[1084px] z-10"
        >
          <Image
            src="/Hero/Headphone.png"
            alt="Headphones"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[180px] leading-[172px] font-semibold text-center w-full z-0 bg-gradient-to-t from-[#DACCBC] to-[#AFA497] bg-clip-text text-transparent"
        >
          Aura Pro II
        </motion.h2>
      </div>
    </section>
  );
}
