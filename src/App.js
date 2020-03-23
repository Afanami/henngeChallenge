import React, { Component } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import EmailGrid from './components/EmailGrid/EmailGrid';
import MailArchiver from "./util/MailArchiver";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: null
    };

    this.searchDateRange = this.searchDateRange.bind(this);
  }

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