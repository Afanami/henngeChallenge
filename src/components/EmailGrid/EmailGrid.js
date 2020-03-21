import React, { Component } from 'react';
import './EmailGrid.css';
import Email from '../Email/Email.js';

class EmailGrid extends Component {
  render() {
    return (
      <div className="email-grid">
        {/* {
            this.props.businesses && this.props.businesses.map(business => {
              return <Business key={business.id} business={business} />
            })
        } */}
      </div>
    );
  }
}

export default EmailGrid;