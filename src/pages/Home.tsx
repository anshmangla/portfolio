import React from 'react';
import {
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Education,
  Contact,
  SectionDivider
} from '../components';

export const Home: React.FC = () => {
  return (
    <main className="relative z-10">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      {/* Pass a limit prop to only show 4 projects */}
      <Projects limit={4} />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Contact />
    </main>
  );
};
