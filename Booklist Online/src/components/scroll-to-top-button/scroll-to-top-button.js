import React from 'react';

import './scroll-to-top-button.css';

class ScrollToTopButton extends React.Component {
  state = {
      intervalId: 0
  };

scrollStep() {
  window.pageYOffset === 0 ? clearInterval(this.state.intervalId) : window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
}

scrollToTop() {
  let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
  this.setState({ intervalId: intervalId });
}

render () {
  return (
    <span title='Back to top' className='oer-span-a font-size-12 to-top-button' onClick={() => { this.scrollToTop()}}>
    <u>«Back to Top»</u></span>
    );
  }
} 

export default ScrollToTopButton;

