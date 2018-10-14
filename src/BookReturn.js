import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger';
import * as BooksAPI from './BooksAPI'

class BookReturn extends Component {
 state = {
   book: this.props.book 
 }
 updateBookType = (val) => {
   this.setState((prevState) => ({
      book: { ...prevState.book,
             shelf: val
            }
    }))

   BooksAPI.update(this.state.book, val)
 }
 render() {
  const bookType = this.state.book.hasOwnProperty("shelf") === false ? 
  'none' : this.state.book.shelf
  const image = this.props.book.hasOwnProperty("imageLinks") === false ? '' : this.props.book.imageLinks.thumbnail
  return (
          <li key={this.props.book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${image})` }}></div>
                <BookShelfChanger bookType={bookType} onUpdateType={(type) => {
              		this.updateBookType(type)
            	}}/>
              </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.hasOwnProperty("authors") ? this.props.book.authors.toString() : ''}</div>
          </div>
        </li>
    )
 }
}

export default BookReturn