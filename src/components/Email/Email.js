import React, { Component } from 'react';
import './Email.css';
import clipIcon from '../../images/icon_clip.svg';
import chevronIcon from '../../images/icon_arrow02.svg';
import mailIcon from '../../images/icon_mail_sp.svg';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailBodyActive: 'email-body-inactive',
      emailRowHighlight: '',
      width: window.innerWidth
    };

    this.toggleEmailBodyClass = this.toggleEmailBodyClass.bind(this);
  }

  // Keep track of screen width to render mobile component
  // Can be done via media queries but decided to do it this way instead
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  // Toggle highlight and extended feature which display the email body and keeps it highlight to show its open
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
    const { width } = this.state;
    const isMobile = width <= 500;
    let attachmentIcon = this.props.email.attachment ? clipIcon : '';

    // Render mobile component if width less than 500px can further adjust this with @MEDIA QUERIES
    if (isMobile) {
      return (
        <React.Fragment>
          <div className={`email-row-mobile ${this.state.emailRowHighlight}`} onClick={this.toggleEmailBodyClass}>
            <div className="mail-icon-container">
              <img className="mail-icon" src={mailIcon}></img>
            </div>
            <div className="details-container-mobile">
              <div className="details-mobile">
                <div className={this.props.fromBold ? "details-from-mobile bold" : "details-from-mobile"}>
                  {this.props.email.from}
                </div>
                <div className={this.props.dateBold ? "extra-details-mobile bold" : "extra-details-mobile"}>
                  <img className="attachment-icon-mobile" src={attachmentIcon}></img>
                  {this.props.email.dateDisplay}
                  <img className="chevron-icon" src={chevronIcon} alt="View email"></img>
                </div>
              </div>
              <div className="additional-details-mobile">
                <div className={this.props.toBold ? "details-to-mobile bold" : "details-to-mobile"}>
                  {this.props.email.to.join(', ')}
                </div>
                <div className={this.props.email.additionalTo === 0 ? "inactive" : "additional-details-to-mobile"}>
                  {`+${this.props.email.additionalTo}`}
                </div>
              </div>
            </div>
            <div className={this.props.subjectBold ? "subject-mobile bold" : "subject-mobile"}>
              {this.props.email.subject}
            </div>
          </div>
          <div className={`email-body-mobile ${this.state.emailBodyActive}`}>
            {this.props.email.body}
          </div>
        </React.Fragment>
      );
    } else { // Render desktop component
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
            <div className="attachment-icon-wrapper">
              <img className="attachment-icon" src={attachmentIcon}></img>
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
}


export default Email;
