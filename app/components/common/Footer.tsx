'use client';
import React from 'react';
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[linear-gradient(180deg,#f5f5f5_0%,_#d2ccc6_100%)]">
      <div className="flex flex-col gap-[21px] sm:gap-[31px] md:gap-[42px] justify-start items-center w-full">
        {/* Main Content Section */}
        <div className="flex flex-col gap-[16px] sm:gap-[24px] md:gap-[32px] justify-start items-center w-full pr-[28px] pl-[28px] sm:pr-[42px] sm:pl-[42px] md:pr-[56px] md:pl-[56px] mt-[40px] sm:mt-[60px] md:mt-[80px]">
          {/* Brand Message */}
          <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-center w-full max-w-[90%] sm:max-w-[80%] md:w-[74%]">
            <h2 className="text-[24px] sm:text-[33px] md:text-[42px] font-poppins font-semibold leading-[36px] sm:leading-[49px] md:leading-[63px] text-center capitalize text-global-1">
              Sound. Presence. Purpose.
            </h2>
            <p className="text-[14px] sm:text-[17px] md:text-[20px] font-poppins font-normal leading-[21px] sm:leading-[25px] md:leading-[30px] text-center text-global-3">
              Focused on crafting immersive audio experiences. <br className="hidden sm:block" />
              We believe sound should not just be heard—it should move you.
            </p>
          </div>

          {/* Product Buttons */}
          <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center items-center w-auto">
            <button className="text-[14px] sm:text-[15px] md:text-[16px] font-poppins font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-button-1 border-[1px] border-solid border-image-[linear-gradient(180deg,#8b8681_0%,_#d2cdc6_100%)] rounded-[16px] sm:rounded-[19px] md:rounded-[22px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] sm:pt-[9px] sm:pr-[28px] sm:pb-[9px] sm:pl-[28px] md:pt-[10px] md:pr-[32px] md:pb-[10px] md:pl-[32px] bg-global-4 hover:opacity-90 transition-opacity duration-200">
              Aura Pro II
            </button>
            <button className="text-[14px] sm:text-[15px] md:text-[16px] font-poppins font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-button-1 border-[1px] border-solid border-image-[linear-gradient(180deg,#8b8681_0%,_#d2cdc6_100%)] rounded-[16px] sm:rounded-[19px] md:rounded-[22px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] sm:pt-[9px] sm:pr-[28px] sm:pb-[9px] sm:pl-[28px] md:pt-[10px] md:pr-[32px] md:pb-[10px] md:pl-[32px] bg-global-4 hover:opacity-90 transition-opacity duration-200">
              Flow II
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full border-t-[1px] border-solid border-[#8b8782] pt-[8px] pr-[40px] pb-[8px] pl-[40px] sm:pt-[12px] sm:pr-[60px] sm:pb-[12px] sm:pl-[60px] md:pt-[16px] md:pr-[80px] md:pb-[16px] md:pl-[80px]">
          {/* Logo */}
          <div className="flex gap-[1px] sm:gap-[1.5px] md:gap-[2px] justify-center items-center w-auto mb-4 sm:mb-0">
            <span className="text-[14px] sm:text-[16px] md:text-[19px] font-poppins font-semibold leading-[22px] sm:leading-[26px] md:leading-[30px] text-left text-global-1">
              Resonance
            </span>
          </div>

          {/* Copyright and Social */}
          <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center items-center w-auto pt-[4px] pb-[4px] sm:pt-[6px] sm:pb-[6px] md:pt-[8px] md:pb-[8px]">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-poppins font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center sm:text-right text-global-1 self-end w-auto">
              © 2025 Resonance. All rights reserved.
            </p>
            <div className="flex gap-[8px] sm:gap-[12px] md:gap-[16px] items-center">
              <Image
                src="/icons/discordlogo.png"
                alt="Discord"
                width={26}
                height={26}
                className="w-[20px] h-[20px] sm:w-[23px] sm:h-[23px] md:w-[26px] md:h-[26px] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              />
              <Image
                src="/icons/xlogo.png"
                alt="X (Twitter)"
                width={26}
                height={26}
                className="w-[20px] h-[20px] sm:w-[23px] sm:h-[23px] md:w-[26px] md:h-[26px] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              />
              <Image
                src="/icons/metalogo.png"
                alt="Meta"
                width={26}
                height={26}
                className="w-[20px] h-[20px] sm:w-[23px] sm:h-[23px] md:w-[26px] md:h-[26px] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;