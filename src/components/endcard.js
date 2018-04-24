'use strict';

import React from 'react';

class EndCard extends React.Component {

  render () {
    return (
      <div id="endcard" className="end-section">
        <div className="end-card">
          <div className="endcard-title">
            <div className="title-group">
              <div className="center-title"> That's It! </div>
              <div className="caption"> Thanks for your time and patience :) </div>
            </div>
          </div>
          <div className="end-message">
            Wanna know more? reach out to me at <a href="mailto:jefree.sujit@gmail.com">jefree.sujit@gmail.com</a> ;)
          </div>
        </div>
      </div>
    );
  }
}

EndCard.displayName = 'EndCard';

export default EndCard;