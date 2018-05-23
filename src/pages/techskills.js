'use strict';

import React from 'react';
import Waypoint from './components/waypoint';

class TechSkills extends React.Component {

  getBars (barCount) {
    let className, i, barArray = [];

    for (i = 0; i < 8; i ++) {
      className = i < barCount ? 'bar' : 'bar empty';
      barArray.push(<rect className={className} />);
    }

    return barArray;
  }

  renderSkillRows (skills) {
    return skills.map((skill, index) => {
      let init = 45, inc = 80;
      return (
        <g className="bar-chart">
          <text className="skill" y={init + (inc * index)}>{skill.skillName}</text>
          {this.getBars(skill.level)}
        </g>
      );
    });
  }

  renderSkillCharts (skills) { // needs work
    return skills.map((skill, index) => {
      return (
        <div className="pie-chart">
          <svg className="chart-box">
            <circle className="pie"/>
          </svg>
          <div className="skill">{skill.skillName}</div>
        </div>
      );
    });
  }

  render () {
    return (
      <div id="skills" className="skills-section">
        <div className="section-heading skills">Tech Skills</div>
        <Waypoint selector=".skills" />
        <div className="graph-section">
          <div className="vertical-list">
            <div className="section-title">Specialisation:</div>
            <svg className="chart" height="310" aria-labelledby="title desc" role="img">
              <desc id="desc">Specialised skillsets: ReactJs, Node.js, Python, Amazon Web Services</desc>
              <g className="bar-chart">
                <text className="skill" y="45">ReactJS</text>
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar empty" />
              </g>
              <g className="bar-chart">
                <text className="skill" y="125">Node.js</text>
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar empty" />
                <rect className="bar empty" />
              </g>
              <g className="bar-chart">
                <text className="skill" y="205">Python</text>
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar empty" />
                <rect className="bar empty" />
              </g>
              <g className="bar-chart">
                <text className="skill" y="285">AWS</text>
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar" />
                <rect className="bar empty" />
                <rect className="bar empty" />
                <rect className="bar empty" />
              </g>
            </svg>
          </div>
          <div className="horizontal-list">
          <div className="section-title">Related Skills:</div>
            <div className="chart">
              <div className="pie-chart">
                <svg className="chart-box">
                  <circle className="pie"/>
                </svg>
                <div className="skill">HTML 5</div>
              </div>
              <div className="pie-chart">
                <svg className="chart-box">
                  <circle className="pie"/>
                </svg>
                <div className="skill">CSS 3</div>
              </div>
              <div className="pie-chart">
                <svg className="chart-box">
                  <circle className="pie"/>
                </svg>
                <div className="skill">Sass</div>
              </div>
              <div className="pie-chart">
                <svg className="chart-box">
                  <circle className="pie"/>
                </svg>
                <div className="skill" >JQuery</div>
              </div>
              <div className="pie-chart">
                <svg className="chart-box">
                  <circle className="pie"/>
                </svg>
                <div className="skill" >Webpack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TechSkills.displayName = 'TechSkills';

export default TechSkills;