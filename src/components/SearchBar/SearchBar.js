import React, { Component } from 'react';
import './SearchBar.css';
import searchIcon from './icon_search.svg';
import calendarIcon from './icon_calender.svg';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: null
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleDateChange(event) {
    this.setState({
      dateRange: event.target.value
    });
  }

  handleSearch(event) {
    console.log(this.state.dateRange);
    event.preventDefault()
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log(this.state.dateRange);
      event.preventDefault()
    }
  }

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-fields" >
          <img className="calendar-icon" src={calendarIcon}></img>
          <input placeholder="Filter date range" onChange={this.handleDateChange} onKeyPress={this.handleKeyPress} autoFocus />
          <div className="search-icon-border">
            <img className="search-icon" src={searchIcon} onClick={this.handleSearch}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
