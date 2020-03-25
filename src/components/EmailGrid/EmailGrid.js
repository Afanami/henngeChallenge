import React, { Component } from 'react';
import './EmailGrid.css';
import Email from '../Email/Email.js';
import DefaultEmailGrid from '../DefaultEmailGrid/DefaultEmailGrid.js';
import arrowIcon from '../../images/icon_arrow01.svg';

class EmailGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromActive: '',
      toActive: '',
      subjectActive: '',
      dateActive: ''
    };
  }

  // Toggles the bold state for the class true 
  toggleClass(className) {
    const newState = {
      fromActive: '',
      toActive: '',
      subjectActive: '',
      dateActive: ''
    }

    // Use this logic to sort grid as user toggles the header
    let sortByClassName = className.split('Active')[0];

    if (this.state[className] === '') {
      this.props.emails.sort((a, b) => {
        if (sortByClassName === 'to') {
          return (a[sortByClassName][0] > b[sortByClassName][0]) ? 1 : (b[sortByClassName][0] >= a[sortByClassName][0]) ? -1 : 0;
        } else {
          return (a[sortByClassName] > b[sortByClassName]) ? 1 : (b[sortByClassName] >= a[sortByClassName]) ? -1 : 0;
        }
      });

      newState[className] = 'bold arrow-icon-asc';
    } else {
      // Handle asc/dsc
      this.props.emails.reverse();

      if (this.state[className] === 'bold arrow-icon-asc') {
        newState[className] = 'bold arrow-icon-dsc'
      } else {
        newState[className] = 'bold arrow-icon-asc';
      }
    }

    this.setState({ ...newState });
  }

  // Render the header for grid from|to|subject|date
  renderGridHeader() {
    return (
      <div className="header">
        <div className={`from ${this.state.fromActive}`} onClick={() => this.toggleClass('fromActive')}>
          From
      <img className={this.state.fromActive !== '' ? `${this.state.fromActive}` : "arrow-icon-asc inactive"} src={arrowIcon} alt="click to bold" />
        </div>
        <div className={`to ${this.state.toActive}`} onClick={() => this.toggleClass('toActive')}>
          To
      <img className={this.state.toActive !== '' ? `${this.state.toActive}` : "arrow-icon-asc inactive"} src={arrowIcon} alt="click to bold" />
        </div>
        <div className={`subject ${this.state.subjectActive}`} onClick={() => this.toggleClass('subjectActive')}>
          Subject
      <img className={this.state.subjectActive !== '' ? `${this.state.subjectActive}` : "arrow-icon-asc inactive"} src={arrowIcon} alt="click to bold" />
        </div>
        <div className={`date ${this.state.dateActive}`} onClick={() => this.toggleClass('dateActive')}>
          Date
      <img className={this.state.dateActive !== '' ? `${this.state.dateActive}` : "arrow-icon-asc inactive"} src={arrowIcon} alt="click to bold" />
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