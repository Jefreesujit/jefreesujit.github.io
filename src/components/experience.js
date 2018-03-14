'use strict';

import React from 'react';

class Experience extends React.Component {

  render () {
    return (
      <div id="experience" className="exp-section">
        <div className="section-heading">Experience</div>
        <div className="job-section">
          <div className="job-title">Front End Engineer</div>
          <div className="company">Optum Analytics</div>
          <div className="exp">(Mar 2018 - Present)</div>
          <div className="role-rescription">
            <p className="desc-text">• Building a Member Self-Service Application, an Enterprise Level SPA with Material Inspired designs for user-friendly experience. ES6, React.js, Redux, SASS, Webpack.</p>
            <p className="desc-text">• Building the Middle-Tier Server for WebApp, serving data requests from WebApp and authentication for requests from external sources. NPM, Node.js, Express.js.</p>
          </div>
        </div>
        <div className="job-section">
          <div className="job-title">Associate Front End Engineer</div>
          <div className="company">The Advisory Board Company</div>
          <div className="exp">(Jun 2016 - Mar 2018)</div>
          <div className="role-rescription">
            <p className="desc-text">• Building a Member Self-Service Application, an Enterprise Level SPA with Material Inspired designs for user-friendly experience. ES6, React.js, Redux, SASS, Webpack.</p>
            <p className="desc-text">• Building the Middle-Tier Server for WebApp, serving data requests from WebApp and authentication for requests from external sources. NPM, Node.js, Express.js.</p>
          </div>
        </div>
        <div className="job-section">
          <div className="job-title">Front End Intern</div>
          <div className="company">The Advisory Board Company</div>
          <div className="exp">(Jan 2016 - May 2016)</div>
          <div className="role-rescription">
            <p className="desc-text">• Built an React based Configuration Management Web Application for Internal users to display metrics, monitor activity and configure settings.</p>
          </div>
        </div>
      </div>
    );
  }
}

Experience.displayName = 'Experience';

export default Experience;