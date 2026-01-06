import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Portfolio } from './Portfolio';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Achievements } from './Achievements';
import { Contact } from './Contact';

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Portfolio />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}
