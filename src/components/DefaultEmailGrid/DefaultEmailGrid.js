import React, { Component } from 'react';
import './DefaultEmailGrid.css';
import logo from '../../images/logo.png';

function DefaultEmailGrid(props) {
  return (
    <div className="default-grid">
      <img src={logo} alt="No results found by Mail Archiver"></img>
    </div>
  );
}

export default DefaultEmailGrid;