'use client';

const tracks = [
  {
    number: 1,
    title: 'Data Intensive Computing',
    topics: [
      'Distributed Computing',
      'High Performance Computing',
      'Enterprise Cloud Computing',
      'Cloud Infrastructure Management',
      'Dependable Autonomic Computing',
      'Embedded Systems and Software',
      'Grid, Cluster Computing',
      'Heterogeneous Computing',
      'Parallel and Green Computing',
      'Human Computer Interaction',
      'Augmented / Virtual Reality',
      'Indic Computing'
    ]
  },
  {
    number: 2,
    title: 'Networks and Information Security',
    topics: [
      'Computer Architecture & Engineering',
      'Ubiquitous and Pervasive Computing',
      'Wireless, Sensor Networks & Security',
      'Reconfigurable Systems and Algorithms',
      'Intelligent and Context aware computing',
      'Intelligent and Wireless Sensor networks',
      'Security and Network Management',
      'Internet Computing & Web Security',
      'Cryptography and Network Security',
      'Block Chain Technologies',
      'Crypto Currency and Security'
    ]
  },
  {
    number: 3,
    title: 'Artificial Intelligence & Network Intelligence',
    topics: [
      'Computer Vision and Artificial Intelligence',
      'Computational Intelligence and Soft Computing',
      'Fuzzy Logic and Fuzzy Systems',
      'Probabilistic Reasoning',
      'Genetic Algorithms / Evolutionary Computing',
      'Machine Learning and Deep Learning for Smart Systems',
      'Heuristic Planning Strategies and Tools',
      'Natural Language Processing',
      'Hybrid Intelligent Systems',
      'Intelligent Systems Architecture',
      'Multimedia and Cognitive Informatics',
      'Pervasive Computing and Ambient Intelligence'
    ]
  },
  {
    number: 4,
    title: 'Data Science',
    topics: [
      'Data Science and Statistics',
      'Actuarial Statistics',
      'Applied Statistics',
      'Bayesian Inference',
      'Biostatistics',
      'Decision Theory',
      'Econometrics',
      'Financial Statistics',
      'Multivariate Analysis',
      'Optimization Techniques',
      'Probability Theory',
      'Queuing Theory',
      'Reliability Theory and Modeling',
      'Statistical Inference',
      'Stochastic Process and Modeling',
      'Time Series Analysis'
    ]
  },
  {
    number: 5,
    title: 'Big Data Analytics & Technology',
    topics: [
      'Big Data Analytics & Applications',
      'Big Data Technology and Computing',
      'Social Media Analytics',
      'Advanced Database Management System',
      'Data Warehousing and Data Mining',
      'Business Intelligence',
      'Predictive Analytics and Big Data',
      'Big Data Visualization Techniques',
      'Marketing Analytics',
      'Web Data and Text Mining',
      'Data and Information Retrieval',
      'Knowledge Based Expert Systems',
      'Social Network Analysis',
      'Sentiment / Opinion Analytics',
      'Application Oriented Analytics',
      'Semantic Web Technologies',
      'Real Time Data Analytics'
    ]
  },
  {
    number: 6,
    title: 'Bioinformatics and Computational Biology',
    topics: [
      'Bioinformatics and Biological Databases',
      'Computational Biology',
      'Biochemistry and Immunology',
      'Structural Biology / Structural Bioinformatics',
      'Cell and Molecular Biology',
      'Systems Biology',
      'Functional Genomics and Proteomics',
      'Macromolecular Biophysics',
      'Molecular Mechanics and Simulation',
      'Metabolic Engineering',
      'Synthetic Biology',
      'Molecular Modeling & Drug Design',
      'Agricultural Data Mining and Informatics',
      'Biodiversity & Animal Bioinformatics',
      'Bioinformatics Applications in Machine Learning',
      'NGS Informatics and HPC',
      'Health Informatics',
      'Bioethics and Biosafety'
    ]
  },
  {
    number: 7,
    title: 'Management Science and Humanities',
    topics: [
      'Enterprise Information Systems',
      'E-Business and Virtual Marketing',
      'Customer Relationship Management',
      'Decision Support Systems',
      'Business Process Management',
      'Supply Chain Management / Operations',
      'Human Resource Management',
      'Financial Analysis and Management',
      'Pricing and Revenue Management',
      'Retail Operations and Logistics Management',
      'Enterprise Risk Management',
      'Quality Control & Six Sigma',
      'Design Thinking and Applications',
      'LEAN Systems and Operations',
      'Creativity and Innovative Practices',
      'Entrepreneurship Development and Practices'
    ]
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
          The theme of the international conference SACAIM 2025 focuses on the various aspects of
 Innovation in Technology, Computing and Inteligence in the global scenario. Trends in Computer
 Science and their consequences make Engineering Technology research significantly emphasis on
 competitive Technologies and Innovative ideas. The primary goal of the conference is to encourage
 and facilitate the exchange of knowledge and practices, ultimately resulting in the generation of new
 ideas.
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
 Foreseeing importance and impact of the above, PG Department  of SIST in AIMIT is organizing an
 International conference to explore innovative ideas and technologies for the benefit of society and
 research community. The conference provides a forum for the dissemination of original research
 results, new ideas and practical development experiences. It would quench the thirst of knowledge for
 learning, educating and research community in diverse application areas. The conference aims to
 cover diversified areas of Information Technology and hence is divided into Eight different tracks. The
 sub topics mentioned in each category is only indicative and can be further expanded and explored.
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
            Only the research articles accepted and presented during the conference will be considered for publication. Al accepted and presented papers will be published in an Edited Book with ISBN with DOI for each paper  
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
