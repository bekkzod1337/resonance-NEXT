'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center w-full p-3 sm:p-4 md:p-6">
        {/* Logo Section */}
        <div className="flex gap-[1px] sm:gap-[1.5px] md:gap-[2px] items-center">
          <Link href="/" className="flex items-center gap-[2px]">
            <span className="text-[14px] sm:text-[16px] md:text-[19px] font-poppins font-semibold leading-[22px] sm:leading-[26px] md:leading-[30px] text-header-1">
              Resonance
            </span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-3 items-center" role="menubar">
          <Link
            href="/"
            role="menuitem"
            className="text-[14px] sm:text-[15px] md:text-[16px] font-poppins font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
          >
            Home
          </Link>

          <Link
            href="/specs"
            role="menuitem"
            className="text-[14px] sm:text-[15px] md:text-[16px] font-poppins font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
          >
            Tech Specs
          </Link>

          <Link
            href="/compare"
            role="menuitem"
            className="text-[14px] sm:text-[15px] md:text-[16px] font-poppins font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-header-2 border border-gray-600 rounded-[22px] px-[32px] py-[10px] bg-gradient-to-b from-[#52483e] to-[#8b8681] hover:opacity-90 transition-opacity duration-200"
          >
            Compare
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden p-2"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
