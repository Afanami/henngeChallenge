import React, { Component } from 'react';
import './Email.css';

class Email extends Component {
  render() {
    return (
      <div className="email">
        {/* <h2>{this.props.emails.from}</h2> */}
        <div className="Business-information">
          <div className="Business-address">
            <a href='' target="_blank">
              <p>{this.props.email.id}</p>
              <p>{this.props.email.from}</p>
              <p>{this.props.email.to}</p>
              <p>{this.props.email.subject}</p>
              <p>{this.props.email.date}</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Email;