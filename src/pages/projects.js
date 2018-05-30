'use strict';

import React from 'react';
import Waypoint from './components/waypoint';

const Projects = (props) => {
  let renderProjectCards = (projects) => {
    return projects.map((project, index) => {
      return (
        <div key={index} className="project-card">
          <div className="project-title">
            { project.link ? <a className="title-link" href={project.link} target="_blank">{project.title}</a> : project.title }
          </div>
          <div className="description">
            {project.description}
          </div>
        </div>
      );
    })
  }

  return (
    <div id="projects" className="projects-section">
      <div className="section-heading projects">Projects</div>
      <Waypoint selector="projects" />
      <div className="prolist-section">
        <div className="personal-projects">
          <div className="section-title">Personal Projects</div>
          <div className="projects-list">
            {renderProjectCards(props.personal)}
          </div>
        </div>
        <div className="university-projects">
          <div className="section-title">University Projects</div>
          <div className="projects-list">
            {renderProjectCards(props.university)}
          </div>
        </div>
      </div>
    </div>
  );
}

Projects.displayName = 'Projects';

export default Projects;