import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import { withRouter } from 'react-router-dom';

const WayPointWrapper = (props) => {
	let handleWaypointEnter = () => {
    props.history.push(`/#${props.selector}`);
  }

  return <Waypoint onEnter={handleWaypointEnter} />;
};

WayPointWrapper.displayName = 'WayPointWrapper';

WayPointWrapper.propTypes = {
  selector: PropTypes.string
};

export default withRouter(WayPointWrapper);