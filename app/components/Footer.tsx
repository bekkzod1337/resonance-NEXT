"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center pt-20 gap-[42px] h-auto bg-gradient-to-b from-[#F5F5F5] to-[#D2CDC6]"
    >
      {/* Top Section with Text and Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-8 w-full max-w-[1280px] px-6"
      >
        {/* Title + Description */}
        <div className="flex flex-col items-center gap-4 max-w-[860px] text-center">
          <h2 className="text-[42px] leading-[63px] font-semibold text-[#52483E] capitalize">
            Sound. Presence. Purpose.
          </h2>
          <p className="text-[20px] leading-[30px] text-[#8B8782] whitespace-pre-line">
            Focused on crafting immersive audio experiences. 
            We believe sound should not just be heard—it should move you.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {["Aura Pro II", "Flow II"].map((label, index) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              className="px-8 py-[10px] h-[44px] rounded-[24px] bg-[#F5F5F5] text-[16px] leading-[24px] text-black shadow-sm"
            >
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-between items-center w-full max-w-[1280px] h-[82px] border-t border-[#8B8782] px-6 md:px-20"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <Image src="/Logo.png" alt="Logo" width={140} height={26} />
        </div>

        {/* Social + Text */}
        <div className="flex items-center gap-4">
          <p className="text-[14px] leading-[20px] text-[#52483E] hidden md:block">
            © 2025 Resonance. All rights reserved.
          </p>
          {["/icons/DiscordLogo.png", "/icons/XLogo.png", "/icons/MetaLogo.png"].map(
            (src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <Image src={src} alt="Social Icon" width={26} height={26} />
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </motion.footer>
  );
}
