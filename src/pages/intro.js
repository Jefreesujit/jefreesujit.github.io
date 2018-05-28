'use strict';

import React from 'react';

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
  }

  return (
    <div id="intro" className="intro-section">
      <div className="nav-section">
        <div className="change-theme">
          <label htmlFor="colorPicker">Change Theme</label>
          <input id="colorPicker" className="color-picker" type="color" value={props.defaultColor} onChange={props.handleColorPick} />
        </div>
        <div className="nav-links">
        </div>
      </div>
      <div className="profile-section">
        <img className="profile-icon" src={props.profileImgLink} id="profileImg" />
      </div>
      <div className="basic-info">
        <div className="profile-name">{props.profileName}</div>
        <div className="designation">{props.presentRole} at {props.presentCompany}  </div>
        <div className="profile-bio">
          {props.profileBio.map(bio => <p>{bio}</p>)}
        </div>
        {renderRefLinks(props.referenceLinks)}
      </div>
    </div>
  );
}

IntroSection.displayName = 'IntroSection';

export default IntroSection;