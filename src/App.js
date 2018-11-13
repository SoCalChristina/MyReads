import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';


import MainPage from './components/pages/MainPage';
import SearchPage from './components/pages/SearchPage';

class BooksApp extends React.Component {
  updateBook(book, shelf) {

  }

  render() {
    return (
    /* comparing a <Route>'s path prop to the current location’s pathname. source: https://reacttraining.com/react-router/web/guides/basic-components*/
    <div>
      <Route exact path="/" component={ MainPage } />
      <Route exact path="/search" component={ SearchPage } />
      </div>
    );
  }
}

export default BooksApp;
