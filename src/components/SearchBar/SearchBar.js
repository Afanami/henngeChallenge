import React, { Component } from 'react';
import './SearchBar.css';
import searchIcon from './../../images/icon_search.svg';
import calendarIcon from './../../images/icon_calender.svg';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Default to show some data
    this.state = {
      dateRange: '2019/12/31 - 2020/1/3'
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // method to update state as user types in the input field
  handleDateChange(event) {
    this.setState({
      dateRange: event.target.value
    });
  }

  // Methods below handle search via toggle and key press
  handleSearch(event) {
    this.props.searchDateRange(this.state.dateRange);
    event.preventDefault()
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.searchDateRange(this.state.dateRange);
      event.preventDefault()
    }
  }

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-items">
          <div className="calendar-icon-container" >
            <img className="calendar-icon" src={calendarIcon} alt="Select a date range"></img>
          </div>
          <div className="input-container">
            <input placeholder="Filter date range" value={this.state.dateRange} onChange={this.handleDateChange} onKeyPress={this.handleKeyPress} autoFocus />
          </div>
          <div className="search-icon-container">
            <img className="search-icon" src={searchIcon} alt="Search archived emails" onClick={this.handleSearch}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
