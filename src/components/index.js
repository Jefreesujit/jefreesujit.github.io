'use strict';

import React from 'react';
import IntroSection from './intro';

class Home extends React.Component {
  render () {
    return (
      <div className="react-app-container">
        <IntroSection />
      </div>
    );
  }
}

Home.displayName = 'Home';

export default Home;
