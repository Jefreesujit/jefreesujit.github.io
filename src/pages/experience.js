'use strict';

import React from 'react';
import Waypoint from './components/waypoint';

const Experience = (props) => {
  let getDescText = (textList) => {
        return textList.map((text, index) => {
          return <p key={index} className="desc-text">• {text}</p> ;
        });
      },
      renderExperienceCard = (expList) => {
        return expList.map((expNode, index) => {
          return (
            <div key={index} className="job-panel">
              <div className="job-title">{expNode.jobTitle}</div>
              <div className="company">{expNode.companyName}</div>
              <div className="exp">{`(${expNode.fromDate} - ${expNode.toDate})`}</div>
              <div className="role-rescription">
                {getDescText(expNode.description)}
              </div>
            </div>
          );
        })
      };

  return (
    <div id="experience" className="exp-section">
      <div className="section-heading experience">Experience</div>
      <Waypoint selector=".experience" />
      <div className="job-section">
        {renderExperienceCard(props.jobsList)}
      </div>
    </div>
  );
}

Experience.displayName = 'Experience';

export default Experience;