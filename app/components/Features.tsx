"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const featureData = [
  {
    image: "/Features/Feature.png",
  },
  {
    image: "/Features/Feature.png",
  },
  {
    image: "/Features/Feature.png",
  },
];

export default function FeaturesSwiperSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-[1280px] px-4 py-10 md:py-20 mx-auto"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        breakpoints={{
          768: {
            slidesPerView: 1.1,
          },
          1024: {
            slidesPerView: 1.2,
          },
        }}
        className="w-full"
      >
        {featureData.map((feature, index) => (
          <SwiperSlide key={feature.image + index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] md:h-[568px] rounded-[24px] overflow-hidden shadow-xl"
            >
              <Image
                src={feature.image}
                alt={`Feature ${index + 1}`}
                fill
                className="object-cover transition-all duration-500"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
