'use strict';

import React from 'react';
import Waypoint from './components/waypoint';

const EndCard = (props) => {
  return (
    <div id="endcard" className="end-section" >
      <Waypoint selector="endcard" />
      <div className="end-card">
        <div className="endcard-title">
          <div className="title-group">
            <div className="center-title"> {props.title} </div>
            <div className="caption"> {props.caption} </div>
          </div>
        </div>
        <div className="end-message">
        {props.message} reach out to me at <a href={`mailto:${props.email}`}>{props.email}</a> ;)
        </div>
      </div>
    </div>
  );
}

EndCard.displayName = 'EndCard';

export default EndCard;