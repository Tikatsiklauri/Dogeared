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
                <div>
                <div className="book-synopsis">
                <div className="pic-box">
                        <li className="book">
                            <Link to={`/books/${book.id}`}><img src={book.image_url}/></Link>
                        </li>
                </div>
                <div className="half-info">
                    <li className="book-title">{book.title}</li>
                    <li className="book-author">{`by ${book.author}`}</li>
                    <li className="book-description">{book.overview}</li>

                    <div id="gotoShow"><li>...</li><Link className="linkToSHow" to={`/books/${book.id}`}>Continue reading</Link></div>
                </div>
                    
                </div>
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