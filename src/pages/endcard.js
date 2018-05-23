'use strict';

import React from 'react';
import Waypoint from './components/waypoint';

class EndCard extends React.Component {
  render () {
    return (
      <div id="endcard" className="end-section" >
        <Waypoint selector=".end-card" />
        <div className="end-card">
          <div className="endcard-title">
            <div className="title-group">
              <div className="center-title"> {this.props.title} </div>
              <div className="caption"> {this.props.caption} </div>
            </div>
          </div>
          <div className="end-message">
          {this.props.message} reach out to me at <a href={`mailto:${this.props.email}`}>{this.props.email}</a> ;)
          </div>
        </div>
      </div>
    );
  }
}

EndCard.displayName = 'EndCard';

export default EndCard;