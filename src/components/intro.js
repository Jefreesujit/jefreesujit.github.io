'use strict';

import React from 'react';

class IntroSection extends React.Component {
  render () {
    return (
      <div id="intro" className="intro-section">
        <div className="nav-section">
          <div className="nav-links">
          </div>
        </div>
        <div className="profile-section">
          <img className="profile-icon" src="assets/images/photo.png" id="profileImg" />
        </div>
        <div className="basic-info">
          <div className="profile-name"> Jefree Sujit</div>
          <div className="designation"> Front End Engineer at The Advisory Board Company </div>
          <div className="profile-bio">
            ✪ Computer Science Graduate ✪ Lives in Chennai, India <br/>
            ✪ Passionate towards Web development ✪ JS Lover<br/>
            ✪ Anime Fan ✪ Marvel Freak ✪ Crypto Enthusiast ✪ Guitar Noob <br/>
          </div>
          <div className="ref-links">
            <div className="ref-site">
              <img src="assets/images/github.png" className="icon git" />
              <a className="site-link" target="_blank" href="https://github.com/jefreesujit">Github</a>
            </div>
            <div className="ref-site">
              <img src="assets/images/stackoverflow.png" className="icon stack" />
              <a className="site-link" target="_blank" href="https://stackoverflow.com/users/2299439/jefree-sujit">Stack Overflow</a>
            </div>
            <div className="ref-site">
              <img src="assets/images/linkedin.png" className="icon linkedin" />
              <a className="site-link" target="_blank" href="https://www.linkedin.com/in/jefreesujit">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

IntroSection.displayName = 'IntroSection';

export default IntroSection;