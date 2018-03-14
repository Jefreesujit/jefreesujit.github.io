'use strict';

import React from 'react';
import IntroSection from './intro';
import Experience from './experience';

class Home extends React.Component {
  render () {
    return (
      <div className="react-app-container">
        <IntroSection />
        <Experience />
      </div>
    );
  }
}

Home.displayName = 'Home';

export default Home;
