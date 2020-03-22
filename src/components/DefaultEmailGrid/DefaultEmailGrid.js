import React, { Component } from 'react';
import './DefaultEmailGrid.css';

class DefaultEmailGrid extends Component {
  render() {
    return (
      <div className="default-grid">
        <img src={this.props.logo}></img>
      </div>
    );
  }
}

export default DefaultEmailGrid;