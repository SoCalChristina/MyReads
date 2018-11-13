import React from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';

class Book extends React.Component {
  render() {
    return (
        <li>
        <div className="book">
          <div className="book-top">
            {/* use props with imageLinks and thumbnails to render book covers */}
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || ""}")` }}></div>
            <div className="book-shelf-changer">
              {/* assign shelf property to select */}
              <select value={this.props.book.shelf || "none"} onChange={(e) => { this.props.updateBook(this.props.book, e.target.value) }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        <div className="book-title">{this.props.book.title}</div>
        {/* add string to notice users when a book does not attribute an author */}
        <div className="book-authors">{this.props.book.authors && this.props.book.authors[0] || "Author credit unavailable..."}</div>
        </div>
      </li>
    );
  }
}


export default Book;
