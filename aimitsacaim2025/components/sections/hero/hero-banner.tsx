'use client';

import { useEffect, useState } from 'react';

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

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full flex items-start justify-center overflow-hidden">
      {/* Removed particle background */}

      {/* Parallax overlay tint */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(122,169,191,0.45)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Hero content */}
      <div className={`relative z-20 text-center w-full pt-44 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} px-2`}>
        <h1
            style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                fontSize: '52px',
                lineHeight: '56px',
                color: 'rgba(255,255,255,0.94)',
                textShadow: '0 6px 8px rgba(0,0,0,0.48), 0 2px 4px rgba(0,0,0,0.52)',
                margin: 0,
                marginBottom: '1rem',
                letterSpacing: '0.02em'
            }}
            >
            <span>INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE</span>
            <br />
            <span style={{ display: "inline-block", marginTop: "0.3em", marginBottom: "0.2em" }}>
                IN HEALTH CARE
            </span>
        </h1>

        <h2
            style={{
                fontFamily: "'PT Serif', serif",
                fontWeight: 700,
                fontSize: '52px',
                lineHeight: '56px',
                color: 'rgb(2, 46, 133)',
                textShadow: "0 3px 14px rgba(30,64,175,0.24)",
                marginTop: '1.5rem',
                marginBottom: '5rem',
                letterSpacing: '0.02em'
            }}
            >
            (ICAIH-2025)
        </h2>

        <div
            style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '34px',
                color: 'rgba(255,255,255,0.94)',
                letterSpacing: '0.02em',
                marginTop: 0,
                marginBottom: '3rem',
                textShadow: '0 4px 8px rgba(0,0,0,0.48), 0 2px 4px rgba(0,0,0,0.52)'
            }}
            >
            ST ALOYSIUS (DEEMED TO BE UNIVERSITY) INSTITUTE OF MANAGEMENT AND IT
        </div>



        <p
        style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '34px',
            color: 'rgba(255,255,255,0.94)',
            letterSpacing: '0.02em',
            marginBottom: '2rem',
            marginTop: 0,
            textShadow: '0 4px 8px rgba(0,0,0,0.48), 0 2px 4px rgba(0,0,0,0.48)'
        }}
        >
        20TH & 21ST, MARCH, 2025
        </p>



        <div className="flex items-center justify-center w-full">
          <img
            src="/springer.png" // Update with your image path
            alt="Springer CCIS"
            style={{ height: '130px', objectFit: 'contain', background: '#fff', boxShadow: '0 6px 32px 0 rgba(46,69,117,0.04)' }}
            className="mx-auto mb-4 mt-3 p-3"
          />
        </div>
      </div>

      {/* Scroll Indicator at Bottom */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
