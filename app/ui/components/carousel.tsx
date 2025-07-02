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
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full portfolio-swiper"
        breakpoints={{
          640: {
            spaceBetween: 30,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4]">
              {slide.link ? (
                <Link href={slide.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain rounded-lg"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-cyan-600 !text-sm sm:!text-base after:!text-sm sm:after:!text-base"></div>
        <div className="swiper-button-next !text-cyan-600 !text-sm sm:!text-base after:!text-sm sm:after:!text-base"></div>
      </Swiper>
      
      <style jsx global>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background: #06b6d4;
          opacity: 0.3;
        }
        
        .portfolio-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        .portfolio-swiper .swiper-button-prev,
        .portfolio-swiper .swiper-button-next {
          color: #06b6d4;
          background: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        @media (max-width: 640px) {
          .portfolio-swiper .swiper-button-prev,
          .portfolio-swiper .swiper-button-next {
            width: 32px;
            height: 32px;
          }
        }
        
        .portfolio-swiper .swiper-button-prev:after,
        .portfolio-swiper .swiper-button-next:after {
          font-size: 16px;
          font-weight: bold;
        }
        
        @media (max-width: 640px) {
          .portfolio-swiper .swiper-button-prev:after,
          .portfolio-swiper .swiper-button-next:after {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}