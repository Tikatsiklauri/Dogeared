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
        const displayBooks = books.map((book) => {
            return (
                <li className="each-book"> 
                    <img src={book.image_url} />
                </li>
            )
        })
        return (
           
                <ul className="book-list">
                  {displayBooks}  
                <div className="arrow"></div>
                </ul>
        )
    }
}

export default BooksIndex;