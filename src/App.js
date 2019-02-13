import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import Books from './Books';
import {Route, Link} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks} />
        <Route exact path='/' render={() => (
          <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <Books books={this.state.books.filter(b => b.shelf === "currentlyReading")} />
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <Books books={this.state.books.filter(b => b.shelf === "wantToRead")} />
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <Books books={this.state.books.filter(b => b.shelf === "read")} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
