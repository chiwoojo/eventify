// React
import React from 'react';

// Components
import MissionBanner from './MissionBanner';
import MeetTheTeam from './MeetTheTeam';
import TechStack from './TechStack';
import HowItWorks from './HowItWorks';

const AboutUs = function AboutUs() {
  return (
    <div>
      <MissionBanner />
      <MeetTheTeam />
      <TechStack />
      <HowItWorks />
    </div>
  );
};

export default AboutUs;
