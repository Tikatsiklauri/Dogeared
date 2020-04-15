import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BookShowContainer from './book_show_container'; 

class BooksIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books } = this.props;
        const displayBooks = books.map(book => {
            return (
                <li className="each-book">
                    <Link to={`/books/${book.id}`}><img src={book.image_url} /></Link>
                </li>
            )
        })
        return (
            <div className="books">
                <Route path="/books/:bookId" component={BookShowContainer}/>
                <ul className="book-list">
                  {displayBooks}  
                </ul>
            </div>
        )
    }
}

export default BooksIndex;