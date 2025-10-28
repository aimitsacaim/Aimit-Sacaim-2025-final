'use client';

import { useState, useEffect } from 'react';

export default function AboutUniversity() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[600px] flex items-center justify-center p-0 overflow-hidden">
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
            St. Aloysius Institutions, Mangalore, established in 1880 prides itself in its history of 144 years.
            Thousands of students who have passed through the portals of this institution have rendered outstanding service to humankind not only in India but across the globe.
            St Aloysius (Deemed to be University) belongs to a network of educational institutions administered by the members of the Society of Jesus, a religious order which runs schools, colleges and universities in more than 105 countries in the world.
            The members of the order, popularly known as Jesuits, have acquired a reputation for excellence in the quality of education. Some of the distinguished Jesuit institutions of higher education in India are St Xavier's College in Kolkata, St Xavier's College in Mumbai, Loyola College in Chennai, St Joseph's College in Trichy, Xavier Institute of Labour Relations (XLRI) in Jamshedpur, and Xavier University in Bhuvaneswar.
            These and many other highly acclaimed centres of learning are managed by the Jesuits and deeply rooted in Jesuit values of commitment and excellence.
          </p>

          <p className="mt-2">
            Despite being a minority institution, the University has provided high-quality education to individuals from all societal backgrounds, irrespective of caste, color, or creed.             The university's motto, "Lucet et Ardet," translating to "shine to enkindle," has served as an inspiration for numerous students to become compassionate individuals who bring brightness and happiness into the lives of others.
          </p>

          <p className="mt-2">
            Promoting social consciousness and nurturing a heightened sense of social responsibility stands as a cornerstone of the University's mission. We take great pride in our alumni who have evolved into champions of impactful social reform.
          </p>

          <p className="mt-2">
            St Aloysius College in its Fourth Cycle of NAAC Accreditation was awarded "A++" Grade with a CGPA of 3.67 out of 4 in January 2023.
            In the NIRF-2023, Ranking awarded by the Ministry of Education, the College has been ranked 80 among the Colleges in India which is among the featured top 2 colleges of Karnataka.
            St Aloysius college was granted University Status by UGC in January 2024.
          </p>

          <p className="mt-2">
            St. Aloysius (Deemed to be University) Institute of Management & Information Technology (AIMIT) serves as the latest campus for MBA and IT programs.
            It encompasses a range of IT courses, including MCA, MSc (Software Technology), MSc (Big Data Analytics), MSc (Data Science), and MSc (Bioinformatics).
          </p>

          <p className="mt-2 mb-0">
            At AIMIT, our priority is our students.
            Each of our programs is meticulously crafted with your career advancement in mind.
            We provide outstanding education, ample opportunities to interact with industry professionals, top-notch facilities, and access to a continuously expanding alumni network.
            The AIMIT experience is aimed at moulding graduates into well-rounded, self-assured, and proficient professionals, empowering them to make a positive impact both in their workplace and community.
          </p>
        </div>
      </div>
    </section>
  );
}
