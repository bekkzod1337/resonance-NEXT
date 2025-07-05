"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FeatureImageSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-4 pt-40 w-full ml-auto mr-auto max-w-[1280px] h-[894px] bg-cover bg-center"
      style={{ backgroundImage: "url('/Features/Feature3.png')" }}
    >
      {/* Text Block */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-6 w-full max-w-[920px] h-[248px] text-center"
      >
        {/* Title */}
        <h2 className="text-white text-[42px] md:text-[86px] leading-[56px] md:leading-[120px] font-semibold">
          Dreamlike Sound
        </h2>

        {/* Description */}
        <p className="text-white text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] font-normal">
          Starting at $320 — Available Now.
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-2 px-8 py-[10px] bg-[#F5F5F5] text-black text-[16px] leading-[24px] rounded-[24px]"
        >
          Buy Now
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
