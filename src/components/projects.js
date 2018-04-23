'use strict';

import React from 'react';

class Projects extends React.Component {

  render () {
    return (
      <div id="projects" className="projects-section">
        <div className="section-heading">Projects</div>
        <div className="prolist-section">
          <div className="personal-projects">
          Personal
          </div>
          <div className="university-projects">
          University
          </div>
        </div>
      </div>
    );
  }
}

Projects.displayName = 'Projects';

export default Projects;