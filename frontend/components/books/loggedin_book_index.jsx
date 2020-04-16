import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BookShowContainer from './book_show_container'; 

class LoggedInBooksIndex extends React.Component {
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
                <div className="pic-box">
                        <li className="book">
                            <Link to={`/books/${book.id}`}><img src={book.image_url}/></Link>
                        </li>
                </div>
            )
        })
        return (
            <div className="books-div">
                <Route path="/books/:bookId" component={BookShowContainer}/>
                <ul className="books-li">
                    {displayBooks}
                </ul>
            </div>
        )
    }
}

export default LoggedInBooksIndex;