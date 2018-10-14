import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooksBar extends Component {
  
 getBookQuery = (query) => {
    this.props.onBookQuery(query);
 }
 render() {
  return (
      <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={this.props.handleBackLink}>Close</Link>
        <div className="search-books-input-wrapper">
             <input type="text" placeholder="Search by title or author" onChange={(event) => this.getBookQuery(event.target.value)}/>
         </div>
       </div>
    )
 }
}

export default SearchBooksBar