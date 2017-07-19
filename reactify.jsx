import React, { Component, PropTypes } from 'react';
import './styles.scss';
import { TimelineMax, TweenMax } from 'gsap';
import $ from 'jquery';

class Reactify extends Component {
  render() {
    return(
      <div className="reactify-container">
        <span className="reactify-img">
          <img src="/album.png"></img>
        </span>
        <div className="reactify-content">
          <p>Currently listening to:</p>
          <h4>Wide Eyes</h4>
          <h5>By Local natives</h5>
        </div>
        <div className="close-icon">
          <img src="/closeicon.svg"></img>
        </div>
      </div>
    );
  }
}

export default Reactify;
