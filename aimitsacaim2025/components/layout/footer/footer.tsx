'use client';

import Image from 'next/image';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const usefulLinks = [
  { text: 'Home', id: 'home' },
  { text: 'About', id: 'about' },
  { text: 'Key Speakers', id: 'keynote-speakers' },
  { text: 'Important Dates', id: 'important-dates' },
];

const featuredLinks = [
  { text: 'Gallery', external: true, url: 'https://www.aimit.edu.in/' },
  { text: 'SACAIM 2025', id: 'sacaim-2025' },
  { text: 'Our Achievements', id: 'achievements' },
  { text: 'Admissions', external: true, url: 'https://www.aimit.edu.in/admission/' },
];

const socialLinks = [
  { icon: FaTwitter, url: 'https://x.com/st_aimit?t=8vD5a3216gthzf7E3u0ycw&s=08', label: 'Twitter' },
  { icon: FaInstagram, url: 'https://www.instagram.com/staloysius_aimitcentre?igsh=MWx6N2tqbWM3ZmxmOA==', label: 'Instagram' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/company/aimitbeeri/', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#354b53] text-white overflow-visible pt-6 pb-3 px-2">
      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-[1rem] pb-6">

          {/* Left Info Card */}
          <div className="bg-white rounded-none text-[#263948] shadow-lg border border-[#e0eef3] flex flex-col items-center text-center min-h-[480px] max-w-[700px] w-full mx-auto mt-[-70px] relative overflow-hidden">
            {/* Light Blue Top Bar */}
            <div className="w-full h-3 bg-[#93c5fd] absolute top-0 left-0" />
            
            <div className="p-8 pt-10 w-full">
              {/* University Title Image */}
              <Image
                src="/image.png"
                alt="St Aloysius (Deemed to be University) Mangaluru - Institute of Management and IT - AIMIT"
                width={400}
                height={100}
                className="object-contain mb-4"
              />

              {/* Italic subtitle */}
              <p className="text-[.99rem] italic font-medium text-gray-700 mt-2 mb-1 text-center">
                St Aloysius Institute of Management & Information
                Technology (AIMIT) is the new campus for MBA and IT
                programmes offered by St Aloysius (Deemed to be University), Mangalore.
              </p>
              <p className="text-gray-600 text-center m-0">
                St Aloysius (Deemed to be University) Institute of Management and IT
                <br />
                Beeri, Kotekar, Mangalore-575022
              </p>
              <div className="w-full text-center mt-3 mb-3">
                <span className="font-bold text-[#022E85]">Phone:</span>
                <span className="ml-1 text-gray-700">91 8242286881/82</span>
                <br />
                <span className="font-bold text-[#022E85]">Email:</span>
                <a
                  href="mailto:sacaim@staloysius.ac.in"
                  className="ml-1 text-[#022E85] hover:text-blue-900"
                >
                  sacaim@staloysius.ac.in
                </a>
              </div>
              {/* Social icons */}
              <div className="flex justify-center gap-6 mt-3">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#e1e9f5] hover:bg-[#022E85] transition-all duration-200 group"
                    >
                      <IconComponent className="text-[#022E85] group-hover:text-white transition-all duration-200" size={22} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Middle: Useful and Featured Links */}
          <div className="flex flex-col md:flex-row w-full items-start justify-center gap-8 pl-3">
            {/* Useful Links */}
            <div>
              <h4 className="text-white text-lg font-bold mb-2 border-b-2 border-blue-400 pb-1">
                Useful Links
              </h4>
              <ul className="list-none p-0 m-0">
                {usefulLinks.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={`#${link.id}`}
                      className="text-slate-100 no-underline text-base font-medium flex items-center hover:text-blue-300 transition-colors"
                    >
                      <span className="mr-2 text-blue-400 text-[1rem] font-bold">▶</span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Featured Links */}
            <div>
              <h4 className="text-white text-lg font-bold mb-2 border-b-2 border-emerald-400 pb-1">
                Featured Links
              </h4>
              <ul className="list-none p-0 m-0">
                {featuredLinks.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={link.external ? link.url : `#${link.id}`}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-slate-100 no-underline text-base font-medium flex items-center hover:text-emerald-300 transition-colors"
                    >
                      <span className="mr-2 text-emerald-400 text-[1rem] font-bold">▶</span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="flex justify-center items-center w-full">
            <iframe
              title="St Aloysius Institute of Management and IT Map"
              src="https://www.google.com/maps?q=St+Aloysius+Institute+of+Management+and+Information+Technology+Beeri+Kotekar+Mangaluru&hl=en&z=16&output=embed"
              width="450"
              height="350"
              className="border-0 rounded-none"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-slate-400/20 mt-4 pt-2.5 text-center">
          <p className="text-slate-100 text-[0.85rem] m-0 mb-0.5 font-medium">
            © Copyright <span className="font-bold">AIMIT.</span> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
