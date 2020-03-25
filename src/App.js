import React, { Component } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import EmailGrid from './components/EmailGrid/EmailGrid';
import MailArchiver from "./util/MailArchiver";

class App extends Component {
  constructor(props) {
    super(props);

    // Return default date range data
    this.state = {
      emails: MailArchiver.retrieveEmails('2019/12/31 - 2020/1/3')
    };

    this.searchDateRange = this.searchDateRange.bind(this);
  }

  // Main handler for filtering between date range
  searchDateRange(dateRange) {
    this.setState({
      emails: MailArchiver.retrieveEmails(dateRange)
    });
  }

  render() {
    return (
      <div className="app">
        <SearchBar searchDateRange={this.searchDateRange} />
        <EmailGrid emails={this.state.emails} />
      </div>
    );
  }
}

export default App;

// 2019/12/31 - 2020/1/3