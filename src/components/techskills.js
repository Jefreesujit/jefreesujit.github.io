'use strict';

import React from 'react';

class TechSkills extends React.Component {

  render () {
    return (
      <div id="skills" className="skills-section">
        <div className="section-heading">Tech Skills</div>
        <div className="graph-section">
          <div className="vertical-list">
            <div className="section-title">Specialisation:</div>
            <svg class="chart" width="1200" height="310" aria-labelledby="title desc" role="img">
              <desc id="desc">Specialised skillsets: ReactJs, Node.js, Python, Amazon Web Services</desc>
              <g className="bar-chart">
                <text className="skill" x="0" y="45">ReactJS</text>
                <rect className="bar" x="130" y="10" />
                <rect className="bar" x="260" y="10" />
                <rect className="bar" x="390" y="10" />
                <rect className="bar" x="520" y="10" />
                <rect className="bar" x="650" y="10" />
                <rect className="bar" x="780" y="10" />
                <rect className="bar" x="910" y="10" />
                <rect className="bar empty" x="1040" y="10" />
              </g>
              <g className="bar-chart">
                <text className="skill" x="0" y="125">Node.js</text>
                <rect className="bar" x="130" y="90" />
                <rect className="bar" x="260" y="90" />
                <rect className="bar" x="390" y="90" />
                <rect className="bar" x="520" y="90" />
                <rect className="bar" x="650" y="90" />
                <rect className="bar" x="780" y="90" />
                <rect className="bar empty" x="910" y="90" />
                <rect className="bar empty" x="1040" y="90" />
              </g>
              <g className="bar-chart">
                <text className="skill" x="0" y="205">Python</text>
                <rect className="bar" x="130" y="170" />
                <rect className="bar" x="260" y="170" />
                <rect className="bar" x="390" y="170" />
                <rect className="bar" x="520" y="170" />
                <rect className="bar" x="650" y="170" />
                <rect className="bar" x="780" y="170" />
                <rect className="bar empty" x="910" y="170" />
                <rect className="bar empty" x="1040" y="170" />
              </g>
              <g className="bar-chart">
                <text className="skill" x="0" y="285">AWS</text>
                <rect className="bar" x="130" y="250" />
                <rect className="bar" x="260" y="250" />
                <rect className="bar" x="390" y="250" />
                <rect className="bar" x="520" y="250" />
                <rect className="bar" x="650" y="250" />
                <rect className="bar empty" x="780" y="250" />
                <rect className="bar empty" x="910" y="250" />
                <rect className="bar empty" x="1040" y="250" />
              </g>
            </svg>
          </div>
          <div className="horizontal-list">
          <div className="section-title">Other Skills:</div>
            <div className="skill">
              <div className="title">JQuery</div>
              <div className="chart"></div>
            </div>
            <div className="skill">
              <div className="title">HTML 5</div>
              <div className="chart"></div>
            </div>
            <div className="skill">
              <div className="title">CSS 3</div>
              <div className="chart"></div>
            </div>
            <div className="skill">
              <div className="title">Webpack</div>
              <div className="chart"></div>
            </div>
            <div className="skill">
              <div className="title">Redux</div>
              <div className="chart"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TechSkills.displayName = 'TechSkills';

export default TechSkills;