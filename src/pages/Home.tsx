import React from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import Benefits from '../components/home/Benefits';
import AppFeatures from '../components/home/AppFeatures';
import WaitlistSection from '../components/home/WaitlistSection';
import AboutSection from '../components/home/about';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection/>
      <ServiceHighlights />
      <Benefits />
      <AppFeatures/>
      <WaitlistSection />
    </>
  );
};

export default Home;