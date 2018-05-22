'use strict';

import React from 'react';
import Waypoint from './components/waypoint';

class Projects extends React.Component {

  renderProjectCards (projects) {
    return projects.map((project) => {
      return (
        <div className="project-card">
          <div className="project-title">
            <a className="title-link" href={project.link} target="_blank">{project.title}</a>
          </div>
          <div className="description">
            {project.descrription}
          </div>
        </div>
      );
    })
  }

  render () {
    return (
      <div id="projects" className="projects-section">
        <div className="section-heading projects">Projects</div>
        <Waypoint selector=".projects" />
        <div className="prolist-section">
          <div className="personal-projects">
            <div className="section-title">Personal Projects</div>
            <div className="projects-list">
              <div className="project-card">
                <div className="project-title">
                  <a className="title-link" href="/easyminer" target="_blank">Easy Miner</a>
                </div>
                <div className="description">
                  An application that allows users to mine cryptocurrencies in mining pools directly from browser. The user can connect to which ever mining pool the user wants, with no external setup and with minimal configuration.
                </div>
              </div>
              <div className="project-card">
                <div className="project-title">
                  <a className="title-link" href="https://driveit.us-west-2.elasticbeanstalk.com" target="_blank">DriveIt</a>
                </div>
                <div className="description">
                  Drive It is a cloud-based web application, that allows you to store, retrieve and manage files over the cloud. It is absolutely free to use, at no cost limit and with no storage limit. Drive It is powered by Node.js and Amazon Web Services (AWS)
                </div>
              </div>
              <div className="project-card">
                <div className="project-title">
                  <a className="title-link" href="https://mychatterbox.herokuapp.com" target="_blank">Chatter Box</a>
                </div>
                <div className="description">
                  An simple chat application that allows you to create rooms and chat in groups. Node based application built using Express.js server. Designed with Material Concept and uses Socket.io for message transfer
                </div>
              </div>
              <div className="project-card">
                <div className="project-title">
                  <a className="title-link" href="/birthdaytracker/public" target="_blank">Birthday Tracker</a>
                </div>
                <div className="description">
                  An App to keep track of Birthday list. Designed with Material Concept, uses Google Sign-in for Authentication and Google Firebase for storage
                </div>
              </div>
              <div className="project-card">
                <div className="project-title">
                  <a className="title-link" href="/anyzip" target="_blank">AnyZip</a>
                </div>
                <div className="description">
                  An online ZIP converter that lets you easily compress your files to the ZIP format. You can upload any number of files, any type of files and our converter will compress it for you.
                </div>
              </div>
            </div>
          </div>
          <div className="university-projects">
            <div className="section-title">University Projects</div>
            <div className="projects-list">
              <div className="project-card">
                <div className="project-title">Member Self-Service Tool</div>
                <div className="description">
                  Contributed in building a Web Application that would assess data readiness, collect the data needed for any products engagement, and prepare the data for use across all products.
                </div>
              </div>
              <div className="project-card">
                <div className="project-title">Cypher It</div>
                <div className="description">
                  Simulated a real-time “Cryptography” project that involves end-to-end encrypted chat option and encrypted file transfer which uses custom algorithms to withstand attacks and secured with user identity authentication on both ends.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Projects.displayName = 'Projects';

export default Projects;