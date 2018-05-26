'use strict';

import React from 'react';
import Waypoint from './components/waypoint';

const TechSkills = (props) => {
  let getBars = (barCount) => {
        let className, i, barArray = [];
        for (i = 0; i < 8; i ++) {
          className = i < barCount ? 'bar' : 'bar empty';
          barArray.push(<rect key={i} className={className} />);
        }
        return barArray;
      },
      renderSkillRows = (skills) => {
        return skills.map((skill, index) => {
          let init = 45, inc = 80;
          return (
            <g key={index} className="bar-chart">
              <text className="skill" y={init + (inc * index)}>{skill.skillName}</text>
              {getBars(skill.level)}
            </g>
          );
        });
      },
      renderSkillCharts = (skills) => { // needs work
        return skills.map((skill, index) => {
          return (
            <div key={index} className="pie-chart">
              <svg className={`chart-box level-${skill.level}`}>
                <circle className="pie"/>
              </svg>
              <div className="skill">{skill.skillName}</div>
            </div>
          );
        });
      };

  return (
    <div id="skills" className="skills-section">
      <div className="section-heading skills">Tech Skills</div>
      <Waypoint selector=".skills" />
      <div className="graph-section">
        <div className="vertical-list">
          <div className="section-title">Specialisation:</div>
          <svg className="chart" height="310" aria-labelledby="title desc" role="img">
            {renderSkillRows(props.primary)}
          </svg>
        </div>
        <div className="horizontal-list">
        <div className="section-title">Related Skills:</div>
          <div className="chart">
            {renderSkillCharts(props.secondary)}
          </div>
        </div>
      </div>
    </div>
  );
}

TechSkills.displayName = 'TechSkills';

export default TechSkills;