'use client';

import { useState, useEffect } from 'react';

export default function AboutUniversity() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[400px] md:min-h-[420px] flex items-center justify-center p-0 overflow-hidden">
      {/* Dark overlay with fade-in */}
      <div 
        className={`absolute inset-0 w-full h-full bg-slate-900/85 transition-opacity duration-1000 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Content */}
      <div 
        className={`relative z-10 w-full max-w-[85vw] text-white text-left font-medium text-lg leading-relaxed shadow-text px-0 py-4 md:px-1 md:py-6 mx-auto transition-opacity duration-1500 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Heading */}
        <h2
            style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '1.625rem',  // 26px roughly
                fontWeight: 600,
                lineHeight: '31px',
                color: 'rgb(255, 255, 255)',
                textShadow: '0 4px 12px rgba(0,0,0,0.7), 0 1.5px 1px rgba(0,0,0,0.24)',
                marginTop: 0,
                marginBottom: '1rem',
                letterSpacing: '0.01em',
            }}
            >
            ABOUT THE UNIVERSITY
        </h2>


        <div
            style={{
                color: 'rgb(255,255,255)',
                fontWeight: 400,
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '18px',
                lineHeight: '1.5'
            }}
        >

          {/* Paragraphs */}
          <p className="mb-2">
            St. Aloysius Deemed to be University, established in 1880 by the Society of Jesus in Mangaluru,
            Karnataka, is a distinguished institution known for its commitment to academic excelence and holistic
            education. With a strong Jesuit tradition, the university offers a diverse range of undergraduate,
            postgraduate, and doctoral programs across various disciplines, including arts, science, commerce,
            and management. Emphasizing research, innovation, and social responsibility, the university provides a
            vibrant learning environment supported by modern infrastructure, making it a leading center for
            higher education in India.
          </p>

          <p className="mt-2">
            St. Aloysius Institute of Management and Information Technology (AIMIT) serves as the premier
            extended campus of St. Aloysius Deemed to be University, dedicated to excelence in Management
            and Information Technology education. The institute offers a range of postgraduate programs,
            including MCA, MSc (Software Technology), MSc (Big Data Analytics), MSc (Data Science), and
            MBA. With state-of-the-art laboratories, modern infrastructure, and a team of experienced faculty,
            AIMIT blends strong theoretical foundations with hands-on practical learning. Through strategic
            industry partnerships, internships, and professional workshops, the institute ensures that students are
            equipped with the skills and confidence to excel in the ever-evolving technological and business
            landscape.
          </p>
          <p className="mt-2">
            Despite being a minority institution, the University has provided high-quality education to individuals from all societal backgrounds, irrespective of caste, color, or creed.
The university's motto, "Lucet et Ardet," translating to "shine to enkindle," has served as an inspiration for numerous students to become compassionate individuals who bring brightness and happiness into the lives of others.
Promoting social consciousness and nurturing a heightened sense of social responsibility stands as a cornerstone of the University's mission. We take great pride in our alumni who have evolved into champions of impactful social reform.
St Aloysius College in its Fourth Cycle of NAAC Accreditation was awarded “A++” Grade with a CGPA of 3.67 out of 4 in January 2023. In the NIRF-2023, Ranking awarded by the Ministry of Education, the College has been ranked 80 among the Colleges in India which is among the featured top 2 colleges of Karnataka. St Aloysius college was granted University Status by UGC in January 2024
            </p>
        </div>
      </div>
    </section>
  );
}
