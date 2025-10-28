'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'HOME', id: 'home' },
  { label: 'ABOUT', id: 'about' },
  { label: 'KEYNOTE SPEAKERS', id: 'keynote-speakers' },
  { label: 'IMPORTANT DATES', id: 'important-dates' },
  { label: 'CONTACT', id: 'contact' },
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
          ? 'bg-[#022e85] shadow-2xl'
          : 'bg-[#022e85]/95 backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand - GEORGIA FONT */}
          <button
            className="flex items-center gap-2 focus:outline-none"
            onClick={handleLogoClick}
            type="button"
            aria-label="Go to home"
          >
            <div className="text-white text-3xl font-black tracking-wider" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.1em' }}>
              SACAIM
            </div>
          </button>

          {/* Desktop Navigation Items - UNDERLINE ON HOVER */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.slice(1).map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, index + 1)}
                className={`relative px-6 py-3 text-lg font-bold transition-all duration-300 group ${
                  activeIndex === index + 1
                    ? 'text-white'
                    : 'text-white/90 hover:text-white'
                }`}
                type="button"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Active underline */}
                {activeIndex === index + 1 && (
                  <div className="absolute bottom-2 left-6 right-6 h-0.5 bg-white" />
                )}
                {/* Hover underline - only when NOT active */}
                {activeIndex !== index + 1 && (
                  <div className="absolute bottom-2 left-6 right-6 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </button>
            ))}
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

        {/* Mobile Drawer/Dropdown Menu - GEORGIA FONT */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-20 inset-x-0 bg-[#022e85] shadow-xl flex flex-col py-2 z-50 border-b border-white/10 animate-fadeIn">
            {navItems.slice(1).map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, index + 1)}
                className={`w-full text-left px-7 py-3 text-lg font-bold tracking-wide transition-all duration-200 ${
                  activeIndex === index + 1
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:bg-white/10'
                }`}
                type="button"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
