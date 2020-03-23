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

    this.toggleFromClass = this.toggleFromClass.bind(this);
    this.toggleToClass = this.toggleToClass.bind(this);
    this.toggleSubjectClass = this.toggleSubjectClass.bind(this);
    this.toggleDateClass = this.toggleDateClass.bind(this);
  }

  toggleFromClass() {
    const currentState = this.state.fromActive;
    this.setState({
      fromActive: !currentState,
      toActive: false,
      subjectActive: false,
      dateActive: false
    });
  }

  toggleToClass() {
    const currentState = this.state.toActive;
    this.setState({
      fromActive: false,
      toActive: !currentState,
      subjectActive: false,
      dateActive: false
    });
  }

  toggleSubjectClass() {
    const currentState = this.state.subjectActive;
    this.setState({
      fromActive: false,
      toActive: false,
      subjectActive: !currentState,
      dateActive: false
    });
  }

  toggleDateClass() {
    const currentState = this.state.dateActive;
    this.setState({
      fromActive: false,
      toActive: false,
      subjectActive: false,
      dateActive: !currentState
    });
  }

  render() {
    let displayGrid;
    let displayHeader;
    let displayResults = <div className="results">
      <h3>Results: <strong>{(this.props.emails && this.props.emails.length) || 0}</strong> mail(s)</h3>
    </div>

    if (this.props.emails === null) {
      displayGrid = "";
      displayResults = <div className="first-render">
        <h3><strong>Welcome to Mail Archiver. Please enter a valid date range in the searchbar.<br /> i.e. 2019/12/31 - 2020/1/3</strong></h3>
      </div>
    } else if ((this.props.emails && this.props.emails.length === 0) || !this.props.emails) {
      displayGrid = <DefaultEmailGrid />
    } else if (this.props.emails) {
      displayHeader =
        <div className="header">
          <div className={this.state.fromActive ? "from bold" : "from"} onClick={this.toggleFromClass}>
            From
            <img className={this.state.fromActive ? "arrow-icon" : "arrow-icon inactive"} src={arrowIcon} />
          </div>
          <div className={this.state.toActive ? "to bold" : "to"} onClick={this.toggleToClass}>
            To
            <img className={this.state.toActive ? "arrow-icon" : "arrow-icon inactive"} src={arrowIcon} />
          </div>
          <div className={this.state.subjectActive ? "subject bold" : "subject"} onClick={this.toggleSubjectClass}>
            Subject
            <img className={this.state.subjectActive ? "arrow-icon" : "arrow-icon inactive"} src={arrowIcon} />
          </div>
          <div className={this.state.dateActive ? "date bold" : "date"} onClick={this.toggleDateClass}>
            Date
            <img className={this.state.dateActive ? "arrow-icon" : "arrow-icon inactive"} src={arrowIcon} />
          </div>
        </div>

      displayGrid = this.props.emails.map(email => {
        return <Email key={email.id} email={email} fromBold={this.state.fromActive} toBold={this.state.toActive} subjectBold={this.state.subjectActive} dateBold={this.state.dateActive} />
      })
    }

    return (
      <div className="email-grid">
        {displayResults}
        {displayHeader}
        {displayGrid}
      </div>
    );
  }
}

export default EmailGrid;