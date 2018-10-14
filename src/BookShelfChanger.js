import React, { Component } from 'react'

class BookShelfChanger extends Component {
 
 updateType = (v) => {
    this.props.onUpdateType(v)
  }
  
 render() {
  return (
      <div className="book-shelf-changer">
        <select value={this.props.bookType} onChange={(event) => this.updateType(event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
       </div>
    )
 }
}

export default BookShelfChanger