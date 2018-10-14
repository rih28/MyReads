import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import NoMatch from './NoMatch';
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  handleBackLink = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  handleBookChange = (book, val) => {
    this.setState((prevState) => ({
      books: prevState.books.map(
        bk => (bk.id === book.id ? Object.assign(bk, { shelf: val }) : bk)
      )
    }))
  }

  render() {
    const { books } = this.state
    const currentReads = books.length === 0
      ?  []
      :  books.filter((b) => (
           b.hasOwnProperty("shelf") === true && b.shelf === 'currentlyReading'
         ))
    const wantToReads = books.length === 0
      ?  []
      :  books.filter((b) => (
           b.hasOwnProperty("shelf") === true && b.shelf === 'wantToRead'
         ))
    const reads = books.length === 0
      ?  []
      :  books.filter((b) => (
           b.hasOwnProperty("shelf") === true && b.shelf === 'read'
         ))
    return (
      <div className="app">
          <Switch>
            <Route exact path='/search' render={({ history }) => (
              <SearchBooks books={this.state.books} handleBackLink={() => { 
                 this.handleBackLink()
                 history.push('/')
               }} />

            )} />
            <Route exact path='/' render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <BookShelf handleBookChange={this.handleBookChange} currentReads={currentReads} wantToReads={wantToReads} reads={reads} />
                  </div>
                </div>
                <div className="open-search">
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>
            )} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    )
  }
}

export default BooksApp