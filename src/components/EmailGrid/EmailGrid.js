import React, { Component } from 'react';
import './EmailGrid.css';
import Email from '../Email/Email.js';
import DefaultEmailGrid from '../DefaultEmailGrid/DefaultEmailGrid.js';
import arrowIcon from '../../images/icon_arrow01.svg';

class EmailGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromActive: false,
      toActive: false,
      subjectActive: false,
      dateActive: false
    };
  }

  // Toggles the bold state for the class true 
  toggleClass(className) {
    const newState = {
      fromActive: false,
      toActive: false,
      subjectActive: false,
      dateActive: false
    }

    newState[className] = !this.state[className];

    this.setState({ ...newState });
  }

  // Render the header for grid from|to|subject|date
  renderGridHeader() {
    return (
      <div className="header">
        <div className={this.state.fromActive ? "from bold" : "from"} onClick={() => this.toggleClass('fromActive')}>
          From
      <img className={this.state.fromActive ? "arrow-icon" : "arrow-icon inactive"} src={arrowIcon} alt="click to bold" />
        </div>
        <div className={this.state.toActive ? "to bold" : "to"} onClick={() => this.toggleClass('toActive')}>
          To
      <img className={this.state.toActive ? "arrow-icon" : "arrow-icon inactive"} src={arrowIcon} alt="click to bold" />
        </div>
        <div className={this.state.subjectActive ? "subject bold" : "subject"} onClick={() => this.toggleClass('subjectActive')}>
          Subject
      <img className={this.state.subjectActive ? "arrow-icon" : "arrow-icon inactive"} src={arrowIcon} alt="click to bold" />
        </div>
        <div className={this.state.dateActive ? "date bold" : "date"} onClick={() => this.toggleClass('dateActive')}>
          Date
      <img className={this.state.dateActive ? "arrow-icon" : "arrow-icon inactive"} src={arrowIcon} alt="click to bold" />
        </div>
      </div>
    )
  }

  // render each email
  renderGridEmails() {
    let gridEmails;

    if ((this.props.emails && this.props.emails.length === 0) || !this.props.emails) {
      gridEmails = <DefaultEmailGrid />
    } else if (this.props.emails) {
      gridEmails = this.props.emails.map(email => {
        return <Email key={email.id} email={email} fromBold={this.state.fromActive} toBold={this.state.toActive} subjectBold={this.state.subjectActive} dateBold={this.state.dateActive} />
      })
    }

    return gridEmails;
  }

  render() {
    return (
      <div className="email-grid">
        <div className="results">
          <h3>Results: <strong>{(this.props.emails && this.props.emails.length) || 0}</strong> mail(s)</h3>
        </div>

        {this.props.emails && this.renderGridHeader()}
        {this.renderGridEmails()}
      </div>
    );
  }
}

export default EmailGrid;