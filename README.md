# MyReads Project

This project is my first attempt at React. It has two views, a view with shelves (Read, Want to Read and Currently Reading) where a user can add books to these shelves using a drop down menu attached to each book. The other view is a search view which allows users to type in words into an input and they will be returned an output of books. These books can be added to the shelves mentioned earlier.

## TL;DR

To run this project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Structure
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of my app. 
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # A component for displaying book images and information in shelves.
    ├── BookReturn.js # A component for displaying book images in and information on the search page.
    ├── BookShelf.js # A component that will contain the three shelf components {CurrentlyReading, WantToRead, Read}.
    ├── BookShelfChanger.js # A component nested in Book and BookReturn to allow users to change the shelf that a book is on.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── CurrentReads.js # A component for the Currently Reading shelf to hold Books.
    ├── NoMatch.js # Handles 404s.
    ├── Read.js #A component for the Read shelf to hold Books.
    ├── SearchBook.js #A component for the Read shelf to hold the SearchBooksBar and SearchBooksGrid components.
    ├── SearchBooksBar.js #A component containing the input and navigation on the search page.
    ├── SearchBooksGrid.js #A component containing the returned Array of books from a search.
    ├── WantToRead.js #A component for the I Want to Read shelf to hold Books.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

