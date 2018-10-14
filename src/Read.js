import React from 'react'
import Book from './Book';

const Read = props => {
  const handleBookChange = (book, val) => {
     props.handleBookChange(book, val)
  }
    
  return (
       <div>
         <h2 className="bookshelf-title">Read</h2>
         <div className="bookshelf-books">
           <ol className="books-grid">
             {props.reads.map((r) => (
               <Book handleBookChange={handleBookChange} key={r.id} book={r}/>
             ))}
           </ol>
         </div>
       </div>
     )
}

export default Read