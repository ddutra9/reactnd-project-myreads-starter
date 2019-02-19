import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Books from './Books';

class SearchBooks extends Component {

  state = {
    query: '',
    searchBooks: [],
    errorSearch: false
  }

  matchBooks = (searchBooks) => {
    const { books } = this.props
    const book = searchBooks.map(b => {
      const book = books.find(book => {
        return book.id === b.id;
      });

      if (book !== undefined) {
        return book;
      } else {
        return { ...b, shelf: 'none' };
      }
    });

    return book;
  }

  updateQuery = (query) =>{
    this.setState({ query: query });

    if (query) {
      BooksAPI.search(query).then(books => {
        if(books.length > 0){
          this.setState({ searchBooks: this.matchBooks(books), errorSearch: false })
        } else {
          this.setState({ searchBooks: [], errorSearch: true })
        }
      });
    } else this.setState({ searchBooks: [], errorSearch: false });
  }

  overUpdateBookShelf = (book, shelf) => {
    this.props.updateBookShelf(book, shelf)
    alert('Moved!')
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          {this.state.searchBooks.length > 0 &&
              <Books books={this.state.searchBooks} updateBookShelf={this.overUpdateBookShelf} />
          }
          {this.state.errorSearch && (
            <h1>Not found any books for {this.state.query}. Please try again!</h1>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBooks;
