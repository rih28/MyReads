import React, { Component } from 'react'
import BookReturn from './BookReturn';

class SearchBooksGrid extends Component {
 render() {
  return (
      <div className="search-books-results">
         <ol className="books-grid">
           {this.props.filteredBooks.map((fb) => (
             <BookReturn handleBookChange={(book, val) => {
              		this.props.handleBookChange(book, val)}} key={fb.id} book={fb}/>
           ))}
         </ol>
      </div>
    )
 }
}

export default SearchBooksGrid
