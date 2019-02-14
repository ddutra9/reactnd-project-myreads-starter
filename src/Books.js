import React, {Component} from 'react'
import Book from './Book'

class Books extends Component {

  render() {

    const { books, updateBookShelf } = this.props

    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} updateBookShelf={updateBookShelf} />
          </li>
        ))}
      </ol>
    )
  }

}

export default Books;
