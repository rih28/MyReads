import React from 'react'
import Book from './Book';

const WantToRead = props => {
  const handleBookChange = (book, val) => {
     props.handleBookChange(book, val)
  }
    
   return (
       <div>
         <h2 className="bookshelf-title">Want to Read</h2>
         <div className="bookshelf-books">
           <ol className="books-grid">
             {props.wantToReads.map((wtr) => (
               <Book handleBookChange={handleBookChange} key={wtr.id} book={wtr}/>
             ))}
           </ol>
         </div>
       </div>
     )
}

export default WantToRead