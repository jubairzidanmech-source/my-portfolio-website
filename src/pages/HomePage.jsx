import React from 'react';
import { Hero3Col } from '../components/Hero3Col';
import { MilestonesCarousel } from '../components/MilestonesCarousel';

export const HomePage = ({ setActivePage }) => {
  return (
    <div className="container animate-fade-in">
      {/* Hero Section with Intro, Portrait & Stats Banner */}
      <Hero3Col setActivePage={setActivePage} />

      {/* In Frames: Academic & Research Milestones Carousel */}
      <MilestonesCarousel setActivePage={setActivePage} />
    </div>
  );
};
