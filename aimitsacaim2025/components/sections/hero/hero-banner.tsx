'use client';

import { useEffect, useState } from 'react';

export default function HeroBanner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setIsVisible(true);
  const handleMouseMove = (e: MouseEvent) => {  // Explicit type here
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full flex items-start justify-center overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(122,169,191,0.45)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Hero content */}
      <div
        className={`relative z-20 text-center w-full pt-24 sm:pt-32 md:pt-44 transition-all duration-1000
         ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} px-3 flex flex-col items-center`}
      >
        <h1
          className="
            font-bold
            md:font-extrabold
            text-white
            leading-tight
            mx-auto
            text-[2.2rem]
            min-[375px]:text-3xl
            sm:text-4xl
            md:text-[52px]
            md:leading-14
          "
          style={{
            fontFamily: "'Raleway', sans-serif",
            textShadow: '0 6px 8px rgba(0,0,0,0.48), 0 2px 4px rgba(0,0,0,0.52)',
            margin: 0,
            marginBottom: '1rem',
            letterSpacing: '0.02em',
          }}
        >
          <span className="block md:inline">
            INTERNATIONAL CONFERENCE ON ADVANCED IT,
          </span>
          <br className="hidden md:block" />
          <span
            className="block md:inline"
            style={{ display: "inline-block", marginTop: "0.3em", marginBottom: "0.2em" }}
          >
            ENGINEERING AND MANAGEMENT
          </span>
        </h1>

        <h2
          className="
            font-bold
            text-[2rem]
            min-[375px]:text-[2.3rem]
            sm:text-[2.5rem]
            md:text-[52px]
            leading-tight
            mx-auto
          "
          style={{
            fontFamily: "'PT Serif', serif",
            color: 'rgb(2, 46, 133)',
            textShadow: "0 3px 14px rgba(30,64,175,0.24)",
            marginTop: '1.5rem',
            marginBottom: '2.5rem',
            letterSpacing: '0.02em',
          }}
        >
          (SACAIM 2025)
        </h2>

<div
  className="
    font-bold
    text-base
    min-[375px]:text-lg
    sm:text-xl
    md:text-[28px]
    md:leading-[34px]
    text-white
    mb-3
    mx-auto
    max-w-full
    md:max-w-none
    md:whitespace-nowrap
  "
  style={{
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: '0.02em',
    textShadow: '0 4px 8px rgba(0,0,0,0.48), 0 2px 4px rgba(0,0,0,0.52)',
    marginTop: 0,
    marginBottom: '1.2rem',
  }}
>
  ST ALOYSIUS (DEEMED TO BE UNIVERSITY) INSTITUTE OF MANAGEMENT AND IT
</div>


<p
  className="
    font-bold
    text-base
    min-[375px]:text-lg
    sm:text-xl
    md:text-[28px]
    md:leading-[34px]
    text-white
    mb-6
    mx-auto
    max-w-[340px]
    md:max-w-none
    md:whitespace-nowrap
  "
  style={{
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: '0.02em',
    textShadow: '0 4px 8px rgba(0,0,0,0.48), 0 2px 4px rgba(0,0,0,0.48)',
    marginBottom: '2rem',
    marginTop: 0,
  }}
>
  20TH & 21ST, MARCH, 2025
</p>


        <div className="flex items-center justify-center w-full mt-2">
            <img
                src="/springer.png"
                alt="Springer CCIS"
                srcSet="/springer.png 220w, /springer.png 340w"
                sizes="(max-width: 767px) 220px, 340px"
                style={{
                objectFit: 'contain',
                background: '#fff',
                boxShadow: '0 6px 32px 0 rgba(46,69,117,0.07)',
                }}
                className="mx-auto mb-4 mt-0 p-2 rounded"
            />
            </div>

      </div>

      {/* Scroll Indicator at Bottom */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-1000 delay-1400
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"></div>
    </div>
  );
}
