'use client';

const conveners = [
  {
    name: 'Dr Hemalatha N',
    title: 'Dean',
    institution: 'School of Information Science & Technology St Aloysius (Deemed to be University) Institute of Management and IT',
  },
  {
    name: 'Dr Rakesh Kumar',
    title: 'Associate Professor, HOD (MSc BDA & Data Science)',
    institution: 'School of Information Science & Technology St Aloysius (Deemed to be University) Institute of Management and IT',
  },
];

interface ConvenerCardProps {
  name: string;
  title: string;
  institution: string;
  image?: string; // Optional, as your data doesn't have an image
}
    
function ConvenerCard({ name, title, institution, image }: ConvenerCardProps    ) {
  return (
    <div className="flex flex-col items-center w-[432px] mx-auto group">
      {/* Image Card */}
      <div className="w-[432px] h-[522px] overflow-hidden shadow-md bg-white z-10 relative">
        <img
          src={image || "/images/speakers/default.jpg"}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Info Card */}
      <div
        className={`
          bg-white shadow-lg px-8 pt-6 pb-5
          flex flex-col items-center
          -mt-24
          transition-all duration-300
          w-[400px] group-hover:w-[415px]
          relative z-20
        `}
        style={{ minWidth: 0 }}
      >
        <h3
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            color: "rgb(47, 77, 90)",
            fontSize: "16px",
            lineHeight: "19px",
            textAlign: "center",
            marginBottom: "0.25rem",
          }}
        >
          {name}
        </h3>
        <div className="border-t border-gray-300 my-2 w-8" />
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgb(47, 77, 90)",
            fontSize: "13px",
            lineHeight: "20px",
            textAlign: "center",
            marginBottom: "0.25rem",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgb(47, 77, 90)",
            fontSize: "13px",
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          {institution}
        </p>
      </div>
    </div>
  );
}


export default function Conveners() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[450px] bg-white overflow-hidden px-4 py-8">
      {/* White overlay */}
      <div className="absolute inset-0 w-screen h-full bg-white z-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto py-8">
        {/* Title */}
<h2
  style={{
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
    fontStyle: "normal",
    color: "rgb(2, 46, 133)",
    fontSize: "32px",
    lineHeight: "38px",
    marginBottom: "1rem",
    marginTop: 0,
    letterSpacing: "0.01em",
  }}
  className="text-center drop-shadow-[2px_2px_6px_rgba(237,237,237,1)]"
>
  CONVENERS
</h2>
<div className="mx-auto mb-4 w-[55px] h-[3px] bg-blue-800 rounded" />

        {/* Conveners Grid */}
<div className="flex justify-center items-start gap-12 flex-wrap">
  {conveners.map((convener, idx) => (
    <ConvenerCard key={idx} {...convener} />
  ))}
</div>

      </div>
    </section>
  );
}
