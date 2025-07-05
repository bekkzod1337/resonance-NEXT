"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full h-[92px] mx-auto flex items-center justify-between px-6 rounded-[24px] max-w-[1280px]">
      {/* Logo */}
      <div className="flex items-center gap-[8px] w-fit h-[26px] relative z-50">
        <div className="w-[140px] h-[26px] relative">
          <Image
            src="/Logo.png"
            alt="Waveform"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 w-[408px] h-[44px]">
        <Link
          href="/"
          className="flex items-center justify-center px-6 py-[10px] gap-2 w-[96px] h-[44px]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-[#666] text-center text-[16px] leading-[24px] font-normal">
            Home
          </span>
        </Link>

        <Link
          href="/specs"
          className="flex items-center justify-center px-6 py-[10px] gap-2 w-[139px] h-[44px]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-[#666] text-center text-[16px] leading-[24px] font-normal">
            Tech Specs
          </span>
        </Link>

        <Link
          href="/compare"
          className="flex items-center justify-center px-8 py-[10px] gap-2 w-[141px] h-[44px] bg-gradient-to-b from-[#52483E] to-[#8B8782] rounded-[24px]"
        >
          <span className="text-white text-center text-[16px] leading-[24px] font-normal">
            Compare
          </span>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X size={32} className="text-[#52483E]" />
        ) : (
          <Menu size={32} className="text-[#52483E]" />
        )}
      </button>

      {/* Mobile Navigation Panel with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[92px] left-0 w-full bg-[#F5F5F5] flex flex-col items-center gap-6 py-6 shadow-md rounded-b-[24px] md:hidden z-40"
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-[#3B3B3B] text-[18px] font-medium">Home</span>
            </Link>
            <Link href="/specs" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-[#3B3B3B] text-[18px] font-medium">Tech Specs</span>
            </Link>
            <Link href="/compare" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-white text-[18px] font-medium bg-[#52483E] px-6 py-2 rounded-[24px]">
                Compare
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
