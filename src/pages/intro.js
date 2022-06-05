'use strict';

import React from 'react';
import Waypoint from './components/waypoint';

const IntroSection = (props) => {
  let renderRefLinks = (links) => {
    let linksList = [];

    for (let key in links) {
      linksList.push(
        <div key={key} className="ref-site">
          <img src={`assets/images/${key}.png`} className={`icon ${key}`} />
          <a className="site-link" target="_blank" href={links[key]}>{key}</a>
        </div>
      );
    }

    return linksList;
  },
  scrollToTop = () => {
    if (window.scrollY > 50) {
      return (
        <div className="scroll-top">
          <a className="scroll-top-link" title="Back to top" href="#">&#10148;</a>
        </div>
      )
    }
  }

  return (
    <div id="intro" className="intro-section">
      <div className="nav-section">
        <div className="change-theme">
          <label htmlFor="colorPicker">Change Theme</label>
          <input id="colorPicker" className="color-picker" type="color" value={props.defaultColor} onChange={props.handleColorPick} />
        </div>
        <div className="nav-links">
          <a className="link" href="#experience">Experience</a>
          <a className="link" href="#skills">Skills</a>
          <a className="link" href="#projects">Projects</a>
        </div>
      </div>
      <div className="profile-section">
        <img className="profile-icon" src={props.profileImgLink} id="profileImg" />
      </div>
      <Waypoint selector="" />
      <div className="basic-info">
        <div className="profile-name">{props.profileName}</div>
        <div className="designation">{props.presentRole} at <a className="link" target="_blank" href={props.companyUrl}>{props.presentCompany}</a></div>
        <div className="profile-bio">
          {props.profileBio.map(bio => <p>{bio}</p>)}
        </div>
        {renderRefLinks(props.referenceLinks)}
        {scrollToTop()}
      </div>
    </div>
  );
}

IntroSection.displayName = 'IntroSection';

export default IntroSection;
