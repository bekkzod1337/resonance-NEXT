"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center pt-20 gap-[42px] h-[419px] bg-gradient-to-b from-[#F5F5F5] to-[#D2CDC6]">
      {/* Top Section with Text and Buttons */}
      <div className="flex flex-col items-center gap-8 w-full max-w-[1280px]">
        {/* Title + Description */}
        <div className="flex flex-col items-center gap-4 max-w-[860px] text-center">
          <h2 className="text-[42px] leading-[63px] font-semibold text-[#52483E] capitalize">
            Sound. Presence. Purpose.
          </h2>
          <p className="text-[20px] leading-[30px] text-[#8B8782]">
            Focused on crafting immersive audio experiences. 
We believe sound should not just be heard—it should move you.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-8 py-[10px] h-[44px] rounded-[24px] bg-[#F5F5F5] text-[16px] leading-[24px] text-black">
            Aura Pro II
          </button>
          <button className="px-8 py-[10px] h-[44px] rounded-[24px] bg-[#F5F5F5] text-[16px] leading-[24px] text-black">
            Flow II
          </button>
        </div>
      </div>

      {/* Bottom Section with Logo and Social Icons */}
      <div className="flex justify-between items-center w-full  max-w-[1280px] h-[82px] border-t border-[#8B8782] px-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Replace with your logo image */}
          <Image src="/Logo.png" alt="Logo" width={140} height={26} />
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <p className="text-[16px] leading-[50px] text-[#52483E] hidden md:block">
            © 2025 Resonance. All rights reserved.
          </p>
          <Image src="/icons/DiscordLogo.png" alt="Discord" width={26} height={26} />
          <Image src="/icons/XLogo.png" alt="X (Twitter)" width={26} height={26} />
          <Image src="/icons/MetaLogo.png" alt="Meta" width={26} height={26} />
        </div>
      </div>
    </footer>
  );
}
