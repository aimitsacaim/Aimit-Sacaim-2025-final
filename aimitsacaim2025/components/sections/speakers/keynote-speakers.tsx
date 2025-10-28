'use client';

import Image from 'next/image';

const conferenceChairs = [
  {
    name: 'Dr. Shreekumar',
    title: 'Professor',
    institution: 'Mangalore Institute of Technology & Engineering, Moodabidre',
    image: '/images/speakers/default.jpg',
  },
  {
    name: 'Dr. Raghavendra Ramachandra',
    title: 'Professor',
    institution: 'Dept. of Information Security & Communication NTNU, Norway',
    image: '/images/speakers/default.jpg',
  },
];

const keynoteSpeakers = [
  {
    name: 'Prof. Tad Gonsalves',
    title: 'Professor',
    institution: 'Dept of Information and Communication Science Faculty of Science and Technology, Sophia University',
    image: '/keynote/Dr.madhwaraJ-KG.jpg',
  },
];

interface SpeakerCardProps {
  name: string;
  title: string;
  institution: string;
  image: string;
}

interface KeynoteSpeakerCardProps {
  name: string;
  title: string;
  institution: string;
  image: string;
}

function SpeakerCard({ name, title, institution, image }: SpeakerCardProps) {
  return (
    <div className="flex flex-col items-center w-[432px] mx-auto group">
      {/* Image Card */}
      <div className="w-[432px] h-[522px] overflow-hidden shadow-md bg-white z-10 relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Info Card */}
      <div
        className={`
          bg-white  shadow-lg px-8 pt-6 pb-5
          flex flex-col items-center
          -mt-24
          transition-all duration-300
          w-[400px] group-hover:w-[415px]
          relative z-20
        `}
        style={{
          minWidth: 0,
        }}
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

function KeynoteSpeakerCard({ name, title, institution, image } : KeynoteSpeakerCardProps) {
  return (
    <div className="flex flex-col items-center w-[324px] mx-auto group">
      {/* Different Image Card size */}
      <div className="w-[400px] h-[560px] overflow-hidden shadow-md bg-white z-10 relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Info Card (could have different margin or color) */}
<div
  className={`
    bg-white shadow-lg px-6 pt-6 pb-5
    flex flex-col items-center
    -mt-16
    transition-all duration-300
    w-[360px] group-hover:w-[380px]
    relative z-20
  `}
  style={{ minWidth: 0 }}
>
<h3
  style={{
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
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



export default function KeynoteSpeakers() {
  return (
    <div className="bg-white">
      {/* Conference Chair Section */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[450px] bg-white overflow-hidden py-16">
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4">
<h2
  style={{
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
    fontStyle: 'normal',
    color: 'rgb(2, 46, 133)',
    fontSize: '32px',
    lineHeight: '38px',
    marginBottom: '2rem',
    marginTop: 0,
    letterSpacing: '0.01em'
  }}
  className="text-center drop-shadow-[2px_2px_6px_rgba(237,237,237,1)]"
>
  CONFERENCE CHAIR
</h2>


          <div className="flex flex-row justify-center items-start gap-8 w-full mx-auto flex-wrap">
            {conferenceChairs.map((chair, idx) => (
              <SpeakerCard key={idx} {...chair} />
            ))}
          </div>
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[450px] bg-white overflow-hidden py-16">
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4">
<h2
  style={{
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
    fontStyle: 'normal',
    color: 'rgb(2, 46, 133)',
    fontSize: '32px',
    lineHeight: '38px',
    marginBottom: '2rem',
    marginTop: 0,
    letterSpacing: '0.01em'
  }}
  className="text-center drop-shadow-[2px_2px_6px_rgba(237,237,237,1)]"
>
  KEYNOTE SPEAKERS
</h2>


          <div className="flex flex-row justify-center items-start gap-8 w-full mx-auto flex-wrap">
            {keynoteSpeakers.map((speaker, idx) => (
                <KeynoteSpeakerCard key={idx} {...speaker} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
