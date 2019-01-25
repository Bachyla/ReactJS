import React from 'react';

import './error-indicator.css';
import icon from '../../assets/images/logo.gif';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span className="boom">
        something has gone terribly wrong
      </span>
      <span className="boom">
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
