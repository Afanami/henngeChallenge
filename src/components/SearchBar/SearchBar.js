import React, { Component } from 'react';
import './SearchBar.css';
import searchIcon from './../../images/icon_search.svg';
import calendarIcon from './../../images/icon_calender.svg';

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
        <div className="searchbar-fields" >
          <img className="calendar-icon" src={calendarIcon} alt="Select a date range"></img>
          <input placeholder="Filter date range" onChange={this.handleDateChange} onKeyPress={this.handleKeyPress} autoFocus />
          <div className="search-icon-border">
            <img className="search-icon" src={searchIcon} alt="Search archived emails" onClick={this.handleSearch}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
