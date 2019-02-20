import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Books extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  }

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
