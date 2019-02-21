import React, { Component, Fragment } from 'react';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import Navigation from '../navigation';
import Main from '../main';
import Footer from '../footer';
import Spinner from '../spinner';

import './app.css';

import {BrowserRouter as Router} from 'react-router-dom';

export default class App extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 1000)
  }

  render() {
    const { isLoading } = this.state;
    return (
      <ErrorBoundry>
      <Spinner isLoading={isLoading}>
      <Router>
        <Fragment>
          <Header />
          <Navigation />
          <Main />
          <Navigation />
          <Footer />
        </Fragment>
      </Router>
    </Spinner>
    </ErrorBoundry>
    );
  }
}
