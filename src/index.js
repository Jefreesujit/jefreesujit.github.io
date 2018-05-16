/*global document*/
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Skills from './pages/techskills';
import Intro from './pages/intro';
import EndCard from './pages/endcard';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/" component={Intro} /> */}
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/end" component={EndCard} />
        </div>
      </Router>
    );
  }
}

(() => {
  ReactDOM.render(React.createElement(App), document.getElementById('container'));
})();
