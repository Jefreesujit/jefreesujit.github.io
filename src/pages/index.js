'use strict';

import React from 'react';
import IntroSection from './intro';
import Experience from './experience';
import TechSkills from './techskills';
import Projects from './projects';
import EndSection from './endcard';
import Config from '../../configuration.json';

class Home extends React.Component {
  constructor() {
    super();

    this.updateThemeColor = this.updateThemeColor.bind(this);
    this.exclusionList = ['c', 'd', 'e', 'f'];
  }

  componentWillMount () {
    document.documentElement.style.setProperty('--themeColor', Config.themeColor);
  }

  updateThemeColor (event) {
    console.log(event.target.value);
    if (event.target.value && !this.exclusionList.includes(event.target.value[1]))
      document.documentElement.style.setProperty('--themeColor', event.target.value);
  }

  render () {
    return (
      <div className="react-app-container">
        <IntroSection {...Config.introduction} defaultColor={Config.themeColor} handleColorPick={this.updateThemeColor}/>
        <Experience {...Config.experience}/>
        <TechSkills {...Config.skills}/>
        <Projects {...Config.projects}/>
        <EndSection {...Config.endCard}/>
      </div>
    );
  }
}

Home.displayName = 'Home';

export default Home;
