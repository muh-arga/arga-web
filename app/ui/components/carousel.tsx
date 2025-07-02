"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PortfolioCarousel() {
  type Slide = {
    src: string;
    alt: string;
    link?: string;
  };

  const slides: Slide[] = [
    {
      src: "/portofolio/pon.png",
      alt: "Petro Oxo Nusantara",
      link: "https://pon.co.id",
    },
    {
      src: "/portofolio/ics.png",
      alt: "ICS Seafood Indonesia",
      link: "https://ics-seafood.com",
    },
    { src: "/portofolio/biseka.png", alt: "Biseka Indonesia", link: "" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full aspect-[3/4]">
            {slide.link ? (
              <Link href={slide.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                />
              </Link>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain"
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
