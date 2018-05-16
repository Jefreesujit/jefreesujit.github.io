import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import jump from 'jump.js';

const WayPointWrapper = (props) => {
	let handleWaypointEnter = () => {
    jump(props.selector, {
      duration: 500
    });
	};
	
	return <Waypoint onEnter={handleWaypointEnter} />;
};

WayPointWrapper.displayName = 'WayPointWrapper';

WayPointWrapper.propTypes = {
  selector: PropTypes.string
};

export default WayPointWrapper;