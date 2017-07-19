import React, { Component, PropTypes } from 'react';
import './styles.scss';
import { TimelineMax, TweenMax } from 'gsap';
import $ from 'jquery';

class Reactify extends Component {
  render() {
    return(
      <div className="reactify-container">
        <div className="reactify-img">

        </div>
        <p>Currently listening to:</p>
        <h3>Wide Eyes</h3>
        <h6>By Local natives</h6>
        <div className="close-icon">
          <img src="/closeicon.svg"></img>
        </div>
      </div>
    );
  }
}

export default Reactify;
