"use client";

import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  className?: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, className }) => {
  return (
    <div
      className={`flex flex-wrap md:flex-nowrap gap-10 border-t border-[#D8D8D8] py-20 px-6 md:px-20 bg-gray-200 ${className}`}
    >
      {/* Left Text Block */}
      <div className="w-full md:w-[320px] flex-shrink-0">
        <h3 className="text-[32px] leading-[48px] font-semibold text-[#52483E] capitalize font-poppins">
          {title}
        </h3>
      </div>

      {/* Right Description Block */}
      <div className="flex-1 min-w-[320px] max-w-[698px]">
        <p className="text-[18px] leading-[50px] font-normal text-[#8B8782] font-poppins">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="max-w-[1280px] mx-auto w-full">
      <Feature
        title="Audio Technology"
        description="Custom-tuned 40mm Resonance™ drivers for deep bass.
Ultra-low distortion signal processing.
Adaptive Sound Sculpting™ — real-time EQ.
Spatial Audio Calibration with dynamic head tracking.
Natural Voice Isolation for calls, focus, and immersive listening.
Pressure-balancing acoustic vents for long-wear comfort."
      />
      <Feature
        title="Intelligence"
        description="Dual noise-targeting microphones.
Internal ear-position mic for personalized audio tuning.
Proximity & motion sensors to detect wear and usage.
Gesture-aware force sensor for effortless control.
Accelerometer-assisted voice capture for clarity on the move."
      />
      <Feature
        title="Power"
        description="Custom-designed R2 Sound Core chip.
Advanced audio algorithms tuned for emotional clarity.
Onboard neural audio engine for Spatial Audio and Adaptive EQ."
      />
      <Feature
        title="Controls"
        description="Tap once to play/pause or answer a call.
Tap twice to skip forward or end a call.
Tap three times to rewind.
Press and hold to access voice assistant.
Automatic mute when removed, smart resume when worn."
      />
      <Feature
        title="Built for the Elements"
        description="Rated IPX4 for sweat and weather resistance.
Designed for long sessions, light activity, or relaxed stillness."
      />
      <Feature
        title="Battery"
        description="Up to 36 hours total listening time with case.
Up to 6.5 hours on a single charge.
Fast charge: 10 minutes = 2 hours of play.
USB-C charging + Qi-compatible wireless charging.
LED status light + Find My compatible tone alert."
      />
      <Feature
        title="Connectivity"
        description="Bluetooth® 5.3 low-latency audio.
Multipoint connection with auto handoff.
Seamless pairing across all your devices."
      />
      <Feature
        title="Materials"
        description="100% recycled aluminum in internal frames.
Bio-based mesh ear padding.
Rare earth magnets sourced from reclaimed materials.
Plastic-free, fiber-based packaging.
Assembled in Zero Waste-certified facilities."
      />
      <Feature className="bg-gradient-to-r"
        title="Sustainability & Materials"
        description="100% recycled aluminum in internal frames.
Bio-based mesh ear padding.
Rare earth magnets sourced from reclaimed materials.
Plastic-free, fiber-based packaging.
Assembled in Zero Waste-certified facilities."
      />
    </section>
  );
}
