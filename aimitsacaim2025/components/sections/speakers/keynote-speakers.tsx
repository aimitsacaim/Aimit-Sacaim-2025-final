'use client';

const conferenceRoles = [
  {
    heading: 'Chief Patron',
    name: 'Rev. Dr Praveen Martis SJ',
    title: 'Vice Chancellor',
    institution: 'St Aloysius (Deemed to be University)',
    image: '/chairs/Praveen.png',
  },
  {
    heading: 'Patron',
    name: 'Rev. Dr Kiran Cotha SJ',
    title: 'Director',
    institution: 'AIMIT Centre, St Aloysius (Deemed to be University)',
    image: '/chairs/Kiran.png',
  },
  {
    heading: 'General Chair',
    name: 'Dr Hemalatha N',
    title: 'Dean, School of Information Science & Technology,',
    institution: 'St Aloysius (Deemed to be University)',
    image: '/chairs/hemalatha.png',
  },
];

const keynoteSpeakers = [
  {
    name: 'Dr.MADHWARAJ K G',
    title: 'Professor and HOD MCA Department',
    institution: 'Mangalore Institute of Technology and Engineering',
    image: '/keynote/Dr.madhwaraJ-KG.jpg',
  },
];

// LeadershipCard reuses style of KeynoteSpeakerCard and adds heading on top
function LeadershipCard({ heading, name, title, institution, image }) {
  return (
    <div className="flex flex-col items-center w-[300px] mx-auto group">
      <div
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
          fontStyle: 'normal',
          color: 'rgb(2, 46, 133)',
          fontSize: '29px', // -3px from 32
          lineHeight: '34px', // -4px from 38
          marginBottom: '0.9rem', // slightly reduced
          marginTop: 0,
          letterSpacing: '0.01em',
          textTransform: 'uppercase'
        }}
        className="text-center drop-shadow-[2px_2px_6px_rgba(237,237,237,1)]"
      >
        {heading}
      </div>
      <div className="w-[360px] h-[500px] overflow-hidden shadow-md bg-white z-10 relative rounded-xl">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="bg-white shadow-lg px-5 pt-5 pb-4 flex flex-col items-center -mt-14 transition-all duration-300 w-[310px] group-hover:w-[330px] relative z-20 rounded-xl" style={{ minWidth: 0 }}>
        <h3
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            color: "rgb(47, 77, 90)",
            fontSize: "15px",        // 1pt smaller than before
            lineHeight: "18px",
            textAlign: "center",
            marginBottom: "0.18rem",
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
            fontSize: "12.5px",
            lineHeight: "18px",
            textAlign: "center",
            marginBottom: "0.15rem",
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
            fontSize: "12.5px",
            lineHeight: "18px",
            textAlign: "center",
          }}
        >
          {institution}
        </p>
      </div>
    </div>
  );
}

function KeynoteSpeakerCard({ name, title, institution, image }) {
  return (
    <div className="flex flex-col items-center w-[300px] mx-auto group">
      <div className="w-[360px] h-[500px] overflow-hidden shadow-md bg-white z-10 relative rounded-xl">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="bg-white shadow-lg px-5 pt-5 pb-4 flex flex-col items-center -mt-14 transition-all duration-300 w-[310px] group-hover:w-[330px] relative z-20 rounded-xl" style={{ minWidth: 0 }}>
        <h3
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            color: "rgb(47, 77, 90)",
            fontSize: "15px",
            lineHeight: "18px",
            textAlign: "center",
            marginBottom: "0.18rem",
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
            fontSize: "12.5px",
            lineHeight: "18px",
            textAlign: "center",
            marginBottom: "0.15rem",
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
            fontSize: "12.5px",
            lineHeight: "18px",
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
      {/* Conference Leadership Section */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white overflow-hidden py-16">
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {conferenceRoles.map((role, idx) => (
              <LeadershipCard key={idx} {...role} />
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
