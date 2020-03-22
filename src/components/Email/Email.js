import React, { Component } from 'react';
import './Email.css';
import clipIcon from './icon_clip.svg';

class Email extends Component {
  render() {
    let attachmentIcon = this.props.email.attachment ? clipIcon : '';

    return (
      <div className="email-row">
        <a href="" target="_blank">
          <div className="from-wrapper">
            <div className={this.props.fromBold ? "from-details bold" : "from-details"}>{this.props.email.from}</div></div>
          <div className={this.props.toBold ? "to-details bold" : "to-details"}>{this.props.email.to.join(', ')}</div>
          <div className="additional-recipients-details"></div>
          <div className={this.props.subjectBold ? "subject-details bold" : "subject-details"}>{this.props.email.subject}</div>
          <div className="attachment-wrapper">
            <img className="attachment-details" src={attachmentIcon}></img>
          </div>
          <div className={this.props.dateBold ? "date-details bold" : "date-details"}>{this.props.email.dateDisplay}</div>
        </a>
      </div>
    );
  }
};

export default Email;

{/* <div className="header">
<div className="from">From</div>
<div className="to">To</div>
<div className="subject">Subject</div>
<div className="date">Date</div>
</div> */}