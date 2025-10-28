'use client';

import { MapPin, Mail, Phone } from "lucide-react";

const contactCards = [
  {
    iconType: 'MapPin',
    title: 'Our Address',
    details: [
      'St Aloysius (Deemed to be University)',
      'Institute of Management and IT Beeri,',
      'Kotekar, Mangalore-574122',
    ],
  },
  {
    iconType: 'Mail',
    title: 'Email',
    details: ['hemalatha@staloysius.ac.in'],
    isEmail: true,
  },
  {
    iconType: 'Phone',
    title: 'Phone',
    details: ['+91 94835 76233', '+91 98441 98623'],
  },
];

export default function Contact() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[300px] bg-white overflow-hidden flex justify-center items-center py-10 px-6">
      <div className="relative z-10 w-full max-w-[1100px] py-10 px-6">
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            color: "rgb(2, 46, 133)",
            fontSize: 32,
            lineHeight: "38px",
            marginBottom: "2rem",
            marginTop: 0,
            letterSpacing: "0.01em",
          }}
          className="text-center drop-shadow-[2px_3px_8px_rgba(209,226,255,1)]"
        >
          CONTACT
        </h2>

        {/* Underline */}
        <div className="mx-auto mb-4 w-[55px] h-[3px] bg-blue-800 rounded" />

        {/* Cards Row */}
        <div className="flex flex-row justify-center items-stretch gap-8 mt-8 w-full">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-md min-w-[280px] w-[380px] flex flex-col items-center px-6 py-4 text-center"
              style={{ minHeight: 130 }} // shorter height
            >
              {/* Icon */}
              <div className="mb-3 flex items-center justify-center">
                {card.iconType === "MapPin" && <MapPin className="w-12 h-12" strokeWidth={2} style={{ color: "#1259e6" }} />}
                {card.iconType === "Mail" && <Mail className="w-12 h-12" strokeWidth={2} style={{ color: "#1259e6" }} />}
                {card.iconType === "Phone" && <Phone className="w-12 h-12" strokeWidth={2} style={{ color: "#1259e6" }} />}
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontStyle: "normal",
                  color: 'rgb(65, 72, 87)',
                  fontSize: 22,
                  lineHeight: "28px",
                  marginBottom: 8,
                }}
              >
                {card.title}
              </div>

              {/* Details */}
              <div className="text-base text-gray-600 leading-snug" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                {card.isEmail ? (
                  <a href={`mailto:${card.details[0]}`} className=" font-semibold ">
                    {card.details[0]}
                  </a>
                ) : (
                  card.details.map((detail, idx) => <div key={idx}>{detail}</div>)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
