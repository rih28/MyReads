import React from 'react'
import Book from './Book';

const CurrentReads = props => {
  const handleBookChange = (book, val) => {
     props.handleBookChange(book, val)
  }
    
  return (
       <div>
         <h2 className="bookshelf-title">Currently Reading</h2>
         <div className="bookshelf-books">
           <ol className="books-grid">
             {props.currentReads.map((cr) => (
               <Book handleBookChange={handleBookChange} key={cr.id} book={cr}/>
             ))}
           </ol>
         </div>
       </div>
     )
}

export default CurrentReads