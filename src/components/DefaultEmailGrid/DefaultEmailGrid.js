import React from 'react';
import './DefaultEmailGrid.css';
import logo from '../../images/logo.png';

// stateless functional component 
function DefaultEmailGrid(props) {
  return (
    <div className="default-grid">
      <img src={logo} alt="No results found by Mail Archiver"></img>
    </div>
  );
}

export default DefaultEmailGrid;