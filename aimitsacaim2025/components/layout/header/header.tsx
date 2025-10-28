'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Keynote Speakers', id: 'keynote-speakers' },
  { label: 'Important Dates', id: 'important-dates' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track window scroll to toggle scrolled state and update active nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active nav item based on scroll position
      let currentActive = 0;
      navItems.forEach((item, index) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) currentActive = index;
        }
      });

      setActiveIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll smooth to section and set active menu
  const scrollToSection = (sectionId: string, index: number) => {
    setActiveIndex(index);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Special "For Authors" button scroll handler
  const scrollToAuthors = () => {
    setActiveIndex(navItems.length);
    const element = document.getElementById('for-authors');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl'
          : 'bg-gradient-to-r from-blue-600/95 to-blue-800/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-blue-600">SACAIM</span>
            </div>
            <div className="hidden md:block">
              <div className="text-white text-xl font-bold leading-tight">SACAIM</div>
              <div className="text-blue-200 text-xs font-medium">October 30-31</div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, index)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeIndex === index
                    ? 'text-white bg-white/20 shadow-lg'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
                type="button"
              >
                <span className="relative z-10">{item.label}</span>
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg animate-pulse" />
                )}
              </button>
            ))}

            {/* For Authors Special Button */}
            <button
              onClick={scrollToAuthors}
              className={`relative px-5 py-2.5 text-sm font-bold transition-all duration-300 rounded-lg ml-2 ${
                activeIndex === navItems.length
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl scale-105'
                  : 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white hover:shadow-lg hover:scale-105'
              }`}
              type="button"
            >
              <span className="relative z-10">For Authors</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Background Floating Dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-4 left-1/4 w-2 h-2 bg-blue-300/30 rounded-full animate-pulse" />
          <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-purple-300/30 rounded-full animate-pulse delay-75" />
          <div className="absolute bottom-4 right-1/4 w-2 h-2 bg-blue-300/30 rounded-full animate-pulse delay-150" />
        </div>
      </div>
    </nav>
  );
}
