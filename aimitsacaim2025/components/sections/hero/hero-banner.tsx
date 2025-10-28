'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setIsVisible(true);
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

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
        className={`relative z-20 text-center w-full pt-32 sm:pt-36 md:pt-28 transition-all duration-1000
         ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} px-3 flex flex-col items-center`}
      >
        {/* Logo */}
        <div className="mb-8 md:mb-4">
          <Image
            src="/headerlogo.png"
            alt="SACAIM Logo"
            width={500}
            height={300}
            className="object-contain mx-auto"
          />
        </div>

        <h1
          className="
            font-bold
            md:font-extrabold
            text-white
            leading-tight
            mx-auto
            text-[2.2rem]
            min-[375px]:text-3xl
            sm:text-3xl
            md:text-[40px]
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
            md:text-[40px]
            leading-tight
            mx-auto
          "
          style={{
            fontFamily: "'PT Serif', serif",
            color: 'rgb(2, 46, 133)',
            textShadow: "0 3px 14px rgba(30,64,175,0.24)",
            marginTop: '0.2rem',
            marginBottom: '1.2rem',
            letterSpacing: '0.02em',
          }}
        >
          SACAIM 2025
        </h2>

<div
  className="
    font-bold
    text-sm
    min-[375px]:text-base
    sm:text-lg
    md:text-[24px]
    md:leading-[32px]
    text-white
    mb-3
    mx-auto
    max-w-full
    px-4
  "
  style={{
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: '0.02em',
    textShadow: '0 4px 8px rgba(0,0,0,0.48), 0 2px 4px rgba(0,0,0,0.52)',
    marginTop: 0,
    marginBottom: '1.2rem',
  }}
>
  ORGANIZED BY 
  <br />
  SCHOOL OF INFORMATION SCIENCE AND TECHNOLOGY  DEPARTMENT 
  <br />
 OF MCA, MSc(ST, BI, BDA, DS)  AIMIT CENTRE, BEERI
 

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
  30TH & 31ST, OCTOBER, 2025
</p>

      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"></div>
    </div>
  );
}
