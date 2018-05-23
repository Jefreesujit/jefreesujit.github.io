'use strict';

import React from 'react';

class IntroSection extends React.Component {

  renderRefLinks (links) {
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

  render () {
    return (
      <div id="intro" className="intro-section">
        <div className="nav-section">
          <div className="nav-links">
          </div>
        </div>
        <div className="profile-section">
          <img className="profile-icon" src={this.props.profileImgLink} id="profileImg" />
        </div>
        <div className="basic-info">
          <div className="profile-name">{this.props.profileName}</div>
          <div className="designation">{this.props.presentRole} at {this.props.presentCompany}  </div>
          <div className="profile-bio">
            {this.props.profileBio.map(bio => <p>{bio}</p>)}
          </div>
          {this.renderRefLinks(this.props.referenceLinks)}
        </div>
      </div>
    );
  }
}

IntroSection.displayName = 'IntroSection';

export default IntroSection;