import React, { Component, Fragment } from 'react';

import ErrorBoundry from '../error-boundry'
import Header from '../header'


import './app.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    <ErrorBoundry>
      <Router>
        <Fragment>
          <Header />
        </Fragment>
      </Router>
    </ErrorBoundry>
    );
  }
}
