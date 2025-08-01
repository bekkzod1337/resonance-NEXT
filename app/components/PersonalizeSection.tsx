"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "/Personalize/1.png",
  "/Personalize/2.png",
  "/Personalize/3.png",
];

export default function PersonalizeSection() {
  return (
    <section className="flex flex-col items-center gap-[80px] py-[80px] pb-[160px] w-full max-w-[1280px] mx-auto px-4">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 max-w-[860px] text-center px-2 md:px-0"
      >
        <h2 className="text-[clamp(32px,6vw,56px)] leading-[1.2] font-semibold text-[#52483E] capitalize">
          Every Detail matters
        </h2>
        <p className="text-[clamp(16px,3.2vw,24px)] leading-[1.5] text-[#8B8782]">
          From the stitch to the signal, precision lives here.
        </p>
      </motion.div>

      {/* Swiper Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          grabCursor={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[340px] h-[340px] md:w-[386px] md:h-[386px] bg-center bg-cover bg-no-repeat rounded-[24px] mx-auto shadow-lg"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
