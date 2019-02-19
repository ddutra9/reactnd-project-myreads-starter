import React, {Component} from 'react'
import imgNotFound from'./icons/image_not_found.png';

class Book extends Component {

  moveBook = event => {
    this.props.updateBookShelf(this.props.book, event.target.value);
  }


  render (){

    const { book } = this.props

    const imgLink = book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail : imgNotFound;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${imgLink})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.moveBook} defaultValue={book.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }

}

export default Book
