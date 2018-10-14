import React from 'react'
import CurrentReads from './CurrentReads';
import WantToRead from './WantToRead';
import Read from './Read';

const BookShelf = props => {
    return (
      <div className="bookshelf">
        <CurrentReads handleBookChange={props.handleBookChange} currentReads={props.currentReads}/>
        <WantToRead handleBookChange={props.handleBookChange} wantToReads={props.wantToReads}/>
        <Read handleBookChange={props.handleBookChange} reads={props.reads} />
      </div>
    )
}

export default BookShelf