import React, { Component } from 'react';
import './EmailGrid.css';
import Email from '../Email/Email.js';
import DefaultEmailGrid from '../DefaultEmailGrid/DefaultEmailGrid.js';

class EmailGrid extends Component {
  render() {
    let displayGrid;

    if (this.props.emails && this.props.emails.length === 0) {
      displayGrid = <DefaultEmailGrid />
    } else if (this.props.emails) {
      displayGrid = this.props.emails.map(email => {
        return <Email key={email.id} email={email} />
      })
    } else {
      displayGrid = <DefaultEmailGrid />
    }

    return (
      <div className="email-grid">
        <p>Results: {(this.props.emails && this.props.emails.length) || 0} mail(s)</p>

        {displayGrid}
      </div>
    );
  }
}

export default EmailGrid;