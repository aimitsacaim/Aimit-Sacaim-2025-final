import HeroBanner from '@/components/sections/hero/hero-banner';
import AboutUniversity from '@/components/sections/about/about-university';
import AboutConference from '@/components/sections/about/about-conference';
import KeynoteSpeakers from '@/components/sections/speakers/keynote-speakers';
import ImportantDates from '@/components/sections/dates/important-dates';
import Conveners from '@/components/sections/committees/conveners';
import Contact from '@/components/sections/contact/contact';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home">
        <HeroBanner />
      </section>

      {/* About University Section */}
      <section id="about">
        <AboutUniversity />
      </section>

      {/* About Conference Section */}
      <section>
        <AboutConference />
      </section>

      {/* Conference Chair & Keynote Speakers */}
      <section id="keynote-speakers">
        <KeynoteSpeakers />
      </section>

      {/* Important Dates */}
      <section id="important-dates">
        <ImportantDates />
      </section>

      {/* Conveners */}
      <section>
        <Conveners />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
