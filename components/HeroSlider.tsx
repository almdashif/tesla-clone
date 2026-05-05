'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    title: 'Model Y L',
    subtitle: 'Visit Our Experience Centers to Learn More',
    bgGradient: 'from-[#8B9EA0] via-[#A8B8B5] to-[#7B8E8C]',
    bgImage: '/model-y-bg.jpg',
    showOrderBtn: true,
    orderText: 'Order Now',
    learnText: 'Learn More',
    carColor: 'silver',
  },
  {
    id: 2,
    title: 'Model 3',
    subtitle: 'Order Online for Touchless Delivery',
    bgGradient: 'from-[#C9D0D8] via-[#D4DBE3] to-[#BDC5CF]',
    bgImage: '/model-3-bg.jpg',
    showOrderBtn: true,
    orderText: 'Order Now',
    learnText: 'Learn More',
    carColor: 'white',
  },
]

// SVG Car illustrations as placeholders matching the Tesla design
function ModelYCar() {
  return (
    <div className="relative w-full flex justify-center">
      <img
        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"
        alt="Tesla Model Y"
        className="w-full max-w-[720px] object-contain drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.25))' }}
        onError={(e) => {
          // Fallback car shape if image fails
          e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 400)
  }, [isTransitioning])

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[100svh] min-h-[600px] overflow-hidden">
      {/* Background - Mountain/Nature scene matching Tesla */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background:
            currentSlide === 0
              ? 'linear-gradient(160deg, #d4c8b0 0%, #b8c4b4 25%, #8fa090 50%, #6b7d6e 75%, #4a5e4e 100%)'
              : 'linear-gradient(160deg, #e8e0d4 0%, #d0d8d8 30%, #b0c0be 60%, #8aa0a0 100%)',
        }}
      />

      {/* Mountain silhouette overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 600"
          className="absolute bottom-0 w-full h-full object-cover opacity-60"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Background mountains - far */}
          <path
            d="M0 600 L0 280 L120 200 L240 260 L360 150 L480 220 L600 120 L720 200 L840 100 L960 180 L1080 80 L1200 160 L1320 60 L1440 140 L1440 600Z"
            fill={currentSlide === 0 ? '#4a5e3e' : '#5a6e4e'}
            opacity="0.5"
          />
          {/* Midground mountains */}
          <path
            d="M0 600 L0 380 L180 300 L300 360 L420 260 L540 340 L660 220 L780 320 L900 200 L1020 310 L1140 220 L1260 330 L1380 240 L1440 300 L1440 600Z"
            fill={currentSlide === 0 ? '#3d5232' : '#4a6038'}
            opacity="0.65"
          />
          {/* Foreground hills */}
          <path
            d="M0 600 L0 460 L200 420 L400 440 L500 400 L600 430 L800 410 L1000 430 L1200 420 L1440 440 L1440 600Z"
            fill={currentSlide === 0 ? '#2d3d22' : '#38461a'}
            opacity="0.5"
          />
          {/* Road */}
          <path
            d="M200 600 L500 450 L700 440 L940 460 L1240 600Z"
            fill="#1a1a1a"
            opacity="0.7"
          />
          {/* Road markings */}
          <path
            d="M480 600 L620 450 L680 450 L540 600Z"
            fill="#e8c840"
            opacity="0.8"
          />
          <path
            d="M520 600 L650 450 L710 450 L580 600Z"
            fill="#e8c840"
            opacity="0.8"
          />
          {/* Guardrail */}
          <path
            d="M150 510 L1290 480"
            stroke="white"
            strokeWidth="6"
            opacity="0.7"
          />
          <path
            d="M155 518 L1295 488"
            stroke="white"
            strokeWidth="4"
            opacity="0.5"
          />
        </svg>

        {/* Sunlight glow */}
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #fff8e0 0%, transparent 70%)',
            top: '5%',
            left: '3%',
          }}
        />
      </div>

      {/* Content overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-start pt-24 md:pt-20 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Title */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-center drop-shadow-lg mt-4 md:mt-8">
          {slides[currentSlide].title}
        </h1>
        <p className="text-white text-sm md:text-base font-normal text-center mt-2 drop-shadow-md opacity-95 tracking-wide">
          {slides[currentSlide].subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mt-5 md:mt-6">
          <button className="bg-[#3E6AE1] hover:bg-[#2d5bd4] text-white font-medium text-sm md:text-base px-7 md:px-10 py-3 md:py-[13px] rounded-full transition-all duration-200 tracking-wide shadow-lg">
            {slides[currentSlide].orderText}
          </button>
          <button className="bg-white hover:bg-gray-100 text-[#393C41] font-medium text-sm md:text-base px-7 md:px-10 py-3 md:py-[13px] rounded-full transition-all duration-200 border border-white tracking-wide shadow-lg">
            {slides[currentSlide].learnText}
          </button>
        </div>
      </div>

      {/* Car Image - positioned in center-lower area */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ bottom: '13%', width: '100%', maxWidth: '900px' }}
      >
        <img
          src={
            currentSlide === 0
              ? 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png'
              : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png'
          }
          alt={slides[currentSlide].title}
          className="w-full object-contain px-4"
          style={{
            filter: 'drop-shadow(0 30px 80px rgba(0,0,0,0.35))',
          }}
        />
      </div>

      {/* Prev Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 z-10"
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#393C41]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 z-10"
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#393C41]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === currentSlide
                ? 'w-5 h-2 bg-white'
                : 'w-2 h-2 bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Schedule a Drive Button - bottom floating */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center pb-4 z-10">
        <button
          className="schedule-btn bg-white/90 hover:bg-white text-[#171A20] font-medium text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-200 border border-white/50"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#3E6AE1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3" fill="#3E6AE1" stroke="none" />
          </svg>
          Schedule a Drive
        </button>
      </div>
    </div>
  )
}
