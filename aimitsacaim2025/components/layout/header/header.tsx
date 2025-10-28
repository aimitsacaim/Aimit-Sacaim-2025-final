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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll smooth to section and set active menu
  const scrollToSection = (sectionId: string, index: number) => {
    setActiveIndex(index);
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Logo click = scroll to top/"home"
  const handleLogoClick = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveIndex(0);
    setMobileOpen(false);
  };

  // Special "For Authors" button scroll handler
  const scrollToAuthors = () => {
    setActiveIndex(navItems.length);
    setMobileOpen(false);
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
          <button
            className="flex items-center gap-2 focus:outline-none"
            onClick={handleLogoClick}
            type="button"
            aria-label="Go to home"
          >
            <div className="text-white text-2xl font-extrabold tracking-wide">SACAIM</div>
          </button>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.slice(1).map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, index + 1)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeIndex === index + 1
                    ? 'text-white bg-white/20 shadow-lg'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
                type="button"
              >
                <span className="relative z-10">{item.label}</span>
                {activeIndex === index + 1 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg animate-pulse" />
                )}
              </button>
            ))}
            {/* For Authors Special Button */}
            {/* <button
              onClick={scrollToAuthors}
              className={`relative px-5 py-2.5 text-sm font-bold transition-all duration-300 rounded-lg ml-2 ${
                activeIndex === navItems.length
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl scale-105'
                  : 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white hover:shadow-lg hover:scale-105'
              }`}
              type="button"
            >
              <span className="relative z-10">For Authors</span>
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(prev => !prev)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Drawer/Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-20 inset-x-0 bg-gradient-to-r from-blue-700 to-blue-900 shadow-xl flex flex-col py-2 z-50 border-b border-blue-400 animate-fadeIn">
            {navItems.slice(1).map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, index + 1)}
                className={`w-full text-left px-7 py-3 text-base font-semibold tracking-wide transition-all duration-200 ${
                  activeIndex === index + 1
                    ? 'text-white bg-blue-900'
                    : 'text-blue-100 hover:bg-blue-800'
                }`}
                type="button"
              >
                {item.label}
              </button>
            ))}
            {/* <button
              onClick={scrollToAuthors}
              className="w-full px-7 py-3 text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 mt-2 rounded-md"
              type="button"
            >
              For Authors
            </button> */}
          </div>
        )}

        {/* Background Floating Dots, keep as is */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-4 left-1/4 w-2 h-2 bg-blue-300/30 rounded-full animate-pulse" />
          <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-purple-300/30 rounded-full animate-pulse delay-75" />
          <div className="absolute bottom-4 right-1/4 w-2 h-2 bg-blue-300/30 rounded-full animate-pulse delay-150" />
        </div>
      </div>
    </nav>
  );
}
