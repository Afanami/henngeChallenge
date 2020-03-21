import React, { Component } from 'react';
import './DefaultEmailGrid.css';
import logo from './logo.png';

class DefaultEmailGrid extends Component {
  render() {
    return (
      <div className="email-grid">
        <img src={logo}></img>
      </div>
    );
  }
}

export default DefaultEmailGrid;