import React, { Component } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import EmailGrid from './components/EmailGrid/EmailGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: []
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <EmailGrid />
      </div>
    );
  }
}

export default App;
