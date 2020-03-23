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
    // remove later just for testing
    this.setState({
      dateRange: "2019/12/31 - 2020/1/3"
    })
    this.props.searchDateRange(this.state.dateRange);
    event.preventDefault()
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      // remove later just for testing
      this.setState({
        dateRange: "2019/12/31 - 2020/1/3"
      })
      this.props.searchDateRange(this.state.dateRange);
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
