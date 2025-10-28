'use client';

const tracks = [
  {
    number: 1,
    title: 'AI in Diagnostics & Predictive Analytics',
    topics: [
      'Early Disease Detection',
      'AI in Medical Imaging',
      'Predictive Patient Outcomes',
      'Clinical Decision Support',
      'Chronic Disease Management',
    ],
  },
  {
    number: 2,
    title: 'AI in Personalized Medicine & Treatment',
    topics: [
      'Genomics & Personalized Care',
      'AI in Drug Discovery',
      'Adaptive Treatment Models',
      'Precision Medicine Case Studies',
      'AI in Robotic Surgery',
    ],
  },
  {
    number: 3,
    title: 'Remote Monitoring & Telehealth',
    topics: [
      'Continuous Patient Monitoring',
      'AI-Enhanced Telemedicine',
      'IoT & Home Healthcare',
      'Predictive Device Maintenance',
      'Wearables & Remote Care',
    ],
  },
  {
    number: 4,
    title: 'Ethical & Social Implications of AI',
    topics: [
      'Data Privacy & Security',
      'Ethical AI in Healthcare',
      'Regulatory & Legal Issues',
      'Building Trust in AI',
      'Social Impact & Equity',
    ],
  },
  {
    number: 5,
    title: 'Brain-Computer Interaction (BCI) in healthcare',
    topics: [
      'Neuroprosthetics and Assistive Devices',
      'BCIs for Neurological Rehabilitation and Recovery',
      'BCI-Based Communication Systems',
      'BCI-Driven Cognitive Enhancement and Mental Health',
      'Diagnostic and Monitoring Applications of BCIs',
    ],
  },
];

export default function AboutConference() {
  return (
    <section className="w-full min-h-[600px] bg-white text-black font-semibold text-lg leading-relaxed py-16 px-8">
      <div className="w-full text-left">
        {/* Main Heading */}
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
        className="text-center"
        >
        ABOUT THE CONFERENCE
        </h2>


        {/* Introduction Paragraphs */}
        <p
            style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontStyle: 'normal',
                color: 'rgb(68, 68, 68)',
                fontSize: '18px',
                lineHeight: '24px',
                marginBottom: '0.25rem', // ~20px for mb-5
                maxWidth: '85vw'
            }}
            className="mx-auto text-gray-700 font-semibold max-w-[85vw]"
        >
          St Aloysius (Deemed to be University) is organizing two days International Conference on{' '}
          <strong>International Conference on Artificial Intelligence in Healthcare (ICAIH-2025)</strong>{' '}
          which deals with the advanced technologies and optimizing solutions in various disciplines of Computer Science,
          Artificial Intelligence, Machine Learning and various fields of Engineering.
        </p>

        <p
            style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontStyle: 'normal',
                color: 'rgb(68, 68, 68)',
                fontSize: '18px',
                lineHeight: '24px',
                marginBottom: '0.25rem', // ~20px for mb-5
                maxWidth: '85vw'
            }}
            className="mx-auto text-gray-700 font-semibold max-w-[85vw]"
        >
          The objective of the conference is to encourage interdisciplinary Research and promote the usage of Artificial Intelligence in the area of Medicine. This will further help in improving the overall quality of life and hence facilitate the society at large.
        </p>

        <p
            style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontStyle: 'normal',
                color: 'rgb(68, 68, 68)',
                fontSize: '18px',
                lineHeight: '24px',
                marginBottom: '1.25rem', // ~20px for mb-5
                maxWidth: '85vw'
            }}
            className="mx-auto text-gray-700 font-semibold max-w-[85vw]"
        >
          ICAIH-2025 aims to provide opportunity for the researchers to share their ideas and experience with other researchers around the globe. ICAIH-2025 seeks potential research submissions that solicit the state of art applications, innovative methods and analyze unexplored challenges to establish relative solutions.
        </p>

        {/* Publication Section */}
        <div className="mt-7 max-w-[85vw] mx-auto">
<h3
  style={{
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
    fontStyle: 'normal',
    color: 'rgb(2, 46, 133)',
    fontSize: '24px',         // Standard for section subtitles
    lineHeight: '32px',
    marginBottom: '0.25rem',
    marginTop: 0,
    letterSpacing: '0.01em'
  }}
>
  Publication
</h3>

          <p
            style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontStyle: 'normal',
                color: 'rgb(68, 68, 68)',
                fontSize: '18px',
                lineHeight: '24px',
                marginBottom: '0.25rem', // this matches mb-5 spacing
                maxWidth: '85vw'
            }}
            >
            The selected papers after the presentation will be published in the prestigious SpringerLink CCIS series.
          </p>
        </div>

        {/* Conference Mode Section */}
        <div className="mt-7 max-w-[85vw] mx-auto">
<h3
  style={{
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,             // bold for subtitle
    fontStyle: 'normal',
    color: 'rgb(2, 46, 133)',
    fontSize: '24px',            // text-2xl is 1.5rem = 24px
    lineHeight: '32px',          // 2xl line height (32px is standard)
    marginBottom: '0.25rem',     // mb-5 (approx 20px)
    marginTop: 0,
    letterSpacing: '0.01em'
  }}
>
  Conference Mode
</h3>

          <p
            style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontStyle: 'normal',
                color: 'rgb(68, 68, 68)',
                fontSize: '18px',
                lineHeight: '24px',
                marginBottom: '1.25rem', // this matches mb-5 spacing
                maxWidth: '85vw'
            }}
            >
            This conference is conducted in{' '}
            hybrid mode.
          </p>
        </div>

        {/* Conference Topics Header */}
        <div className="mt-12 max-w-[85vw] mx-auto">
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
  className="text-center"
>
  CONFERENCE TOPICS
</h2>

          {/* <p className="text-lg mb-9 text-gray-700 font-semibold text-center">
            Papers at ICAIH-2025 would be in the following topics
          </p> */}
        </div>

        {/* Topics Section */}
        <div className="text-left max-w-[85vw] mx-auto">
          <h3
  style={{
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 500,
    fontStyle: 'normal',
    color: 'rgb(68, 68, 68)',
    fontSize: '28px',
    lineHeight: '34px',
    marginBottom: '2rem', // matches mb-8
    marginTop: 0,
    letterSpacing: '0.01em'
  }}
>
            Topics covered (but are not limited to) in the conference are as follows:
          </h3>

          {/* Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track, idx) => (
                <div key={idx} className="mb-8">
<h4
  style={{
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontWeight: 400,
    color: 'rgb(255, 0, 0)',
    fontSize: '26px',
    lineHeight: '39px',
    fontStyle: 'normal',
    marginBottom: '0.5rem',
  }}
>
  Track {track.number}
</h4>

<h5
  style={{
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontWeight: 400,
    fontSize: '26px',
    lineHeight: '39px',
    fontStyle: 'normal',
    marginBottom: '0.75rem',
    textAlign: 'left',
  }}
  className="text-gray-700"
>
  {track.title}
</h5>
                <ul className="space-y-2">
                    {track.topics.map((topic, topicIdx) => (
                    <li
  key={topicIdx}
  className="pl-4 text-base"
  style={{
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 400,
    fontStyle: 'normal',
    color: 'rgb(68, 68, 68)',
    fontSize: '16px',
    lineHeight: '24px',
  }}
>
  <span style={{ color: 'rgb(68, 68, 68)', marginRight: '0.5rem' }}>◆</span>
  {topic}
</li>

                    ))}
                </ul>
                </div>
            ))}
        </div>

        </div>
      </div>
    </section>
  );
}
