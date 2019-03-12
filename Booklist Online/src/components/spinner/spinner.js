import React, { Component, Fragment } from "react";

import "./spinner.css";

class Spinner extends Component {
  render() {
    const { isLoading } = this.props;

    return (
      <Fragment>
        {isLoading ? (
          <div className="spinner-wrapper">
            <div className="spinner">
              <div />
              <div />
            </div>
          </div>
        ) : (
          this.props.children
        )}
      </Fragment>
    );
  }
}

export default Spinner;
