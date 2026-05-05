"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { SliderProps } from "@/types/common";

export default function Slider({ data }: SliderProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade, Navigation]}
      effect="fade"
      speed={1000}
      slidesPerView={1} 
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      navigation
    >
      {data?.map((val) => (
        <SwiperSlide key={val.name}>
          <div className="h-[80vh] relative">

            {/* Image */}
            <img
              src={val.image || ""}
              alt={val.name || ""}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 flex justify-center z-10 pointer-events-none">
           

              <div className="flex flex-col items-center text-center mt-28 pointer-events-auto">

                <h2 className="text-white text-4xl md:text-6xl ">
                  {val.name || ''}
                </h2>

                <p className="text-white text-base md:text-xl mt-1">
                  {val?.desc || ''}
                </p>

                <div className="flex space-x-4 mt-8">
                  <button className="bg-blue-600 text-white text-sm py-2 px-12 rounded-sm">
                    Order Now
                  </button>
                  <button className="bg-white text-sm py-2 px-12 rounded-sm">
                    Learn More
                  </button>
                </div>

              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}