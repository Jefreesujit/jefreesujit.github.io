'use strict';

import React from 'react';
import IntroSection from './intro';
import Experience from './experience';
import TechSkills from './techskills';
import Projects from './projects';

class Home extends React.Component {
  render () {
    return (
      <div className="react-app-container">
        <IntroSection />
        <Experience />
        <TechSkills />
        <Projects />
      </div>
    );
  }
}

Home.displayName = 'Home';

export default Home;
