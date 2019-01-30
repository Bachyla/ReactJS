import React, { Component, Fragment } from 'react';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import Navigation from '../navigation'
import Footer from '../footer'



import './app.css';

import {BrowserRouter as Router} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    <ErrorBoundry>
      <Router>
        <Fragment>
          <Header />
          <Navigation />
          <Navigation />
          <Footer />
        </Fragment>
      </Router>
    </ErrorBoundry>
    );
  }
}
