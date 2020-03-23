import React, { Component } from 'react';
import './Email.css';
import clipIcon from '../../images/icon_clip.svg';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailBodyActive: 'email-body-inactive',
      emailRowHighlight: ''
    };

    this.toggleEmailBodyClass = this.toggleEmailBodyClass.bind(this);
  }

  toggleEmailBodyClass() {
    const emailBodyState = this.state.emailBodyActive === 'email-body-inactive' ? 'email-body-active' : 'email-body-inactive';

    this.setState({
      emailBodyActive: emailBodyState,
    }, () => {
      const emailRowState = this.state.emailBodyActive === 'email-body-active' ? 'email-row-highlight' : '';

      this.setState({
        emailRowHighlight: emailRowState
      });
    });
  }

  render() {
    let attachmentIcon = this.props.email.attachment ? clipIcon : '';

    return (
      <React.Fragment>
        <div className={`email-row ${this.state.emailRowHighlight}`} onClick={this.toggleEmailBodyClass}>
          <div className="from-wrapper">
            <div className={this.props.fromBold ? "from-details bold" : "from-details"}>
              {this.props.email.from}
            </div>
          </div>
          <div className={this.props.toBold ? "to-details bold" : "to-details"}>
            {this.props.email.to.join(', ')}
          </div>
          <div className="additional-recipients-details-wrapper">
            <div className={this.props.email.additionalTo === 0 ? "inactive" : "additional-recipients-details"}>
              {`+${this.props.email.additionalTo}`}
            </div>
          </div>
          <div className={this.props.subjectBold ? "subject-details bold" : "subject-details"}>
            {this.props.email.subject}
          </div>
          <div className="attachment-wrapper">
            <img className="attachment-details" src={attachmentIcon}></img>
          </div>
          <div className={this.props.dateBold ? "date-details bold" : "date-details"}>
            {this.props.email.dateDisplay}
          </div>
        </div>
        <div className={`email-body ${this.state.emailBodyActive}`}>
          {this.props.email.body}
        </div>
      </React.Fragment>
    );
  }
}


export default Email;
