'use strict';

import React from 'react';

class Experience extends React.Component {

  render () {
    return (
      <div id="experience" className="exp-section">
        <div className="section-heading">Experience</div>
        <div className="job-section">
          <div className="job-title">Front End Engineer</div>
          <div className="company">The Advisory Board Company</div>
          <div className="exp">(Apr 2018 - Present)</div>
          <div className="role-rescription">
            <p className="desc-text">• Firm rooting the "Console" application with solid technology stacks, making it more modular and as a platform application to support for any framework to be built in.</p>
            <p className="desc-text">• Enhancing the middle tier server to handle cross-application requests as a platform, with authentication and authorization and serving custom user role based features</p>
            <p className="desc-text">• Working on AWS getting application to cloud, handling traffic with load balancing and autoscaling, improving performance and reducing cost.</p>
          </div>
        </div>
        <div className="job-section">
          <div className="job-title">Associate Front End Engineer</div>
          <div className="company">The Advisory Board Company</div>
          <div className="exp">(Jun 2016 - Mar 2018)</div>
          <div className="role-rescription">
            <p className="desc-text">• Building a Member Self-Service Application "Console", an Enterprise Level SPA with Material Inspired designs for user-friendly experience. ES6, React.js, Redux, SASS, Webpack.</p>
            <p className="desc-text">• Building the Middle-Tier Server for WebApp, serving data requests from WebApp and authentication for requests from external sources. NPM, Node.js, Express.js.</p>
          </div>
        </div>
        <div className="job-section">
          <div className="job-title">Engineering Intern</div>
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