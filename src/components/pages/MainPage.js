import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';

import Shelf from '../Shelf';

class MainPage extends React.Component {
//use a constructor prop to assign this.state. Source: https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
  constructor(props) {
//call super(props) for subclass books first.
//Source: https://reactjs.org/docs/react-component.html#constructor
  super(props);
  // state prop used to hold books list
  this.state = {
    books: []
  }
}
//source: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    BooksAPI.getAll()
    .then(resp => {
      this.setState({ books: resp });
    });
  }

  updateBook = (book, shelf) => {
    //use the API to update books
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <div>
            <Shelf updateBook={this.updateBook} name="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")} />
            <Shelf updateBook={this.updateBook} name="Want To Read" books={this.state.books.filter(b => b.shelf === "wantToRead")} />
            <Shelf updateBook={this.updateBook} name="Read" books={this.state.books.filter(b => b.shelf === "read")} />
          </div>
          </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
      </div>
     );
    }
  }

export default MainPage;
