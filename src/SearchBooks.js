import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar';
import SearchBooksGrid from './SearchBooksGrid';
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
 state = {
    query: '',
    searchedBooks: []
 }
 searchBooksQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }), () => {
      this.searchBooks(this.state.query)
    })
 } 
 searchBooks = (q) => {
    if (q.length > 0) {
      BooksAPI.search(q, 5)
      .then((searchedBooks) => {
        const sb = searchedBooks.constructor === Array ? searchedBooks : []
        this.setState((prevState) => ({
          ...prevState,
          searchedBooks: sb
        }))
      })
    }
  }

 handleBookChange = (book, val) => {
   this.props.handleBookChange(book, val)
 }

 render() {
  const { query } = this.state
  const searchedBooks = query === '' ? [] : this.state.searchedBooks
  const showingBooks = query === ''
      ?  []
      :  this.props.books.filter((b) => (
           b.title.toLowerCase().includes(query.toLowerCase())
         ))
  const mergedBooks = (books, searchedBooks, key) => books.filter( aa => ! searchedBooks.find ( bb => aa[key] === bb[key]) ).concat(searchedBooks);
  const booksFinal = mergedBooks(showingBooks, searchedBooks, "id")

  return (
    <div className="search-books">
      <SearchBooksBar onBookQuery={this.searchBooksQuery} handleBackLink={this.props.handleBackLink}/>
      <SearchBooksGrid filteredBooks={booksFinal}/>
    </div>
  )
 }
}

export default SearchBooks