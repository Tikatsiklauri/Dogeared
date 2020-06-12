import React from 'react';
import { Link } from 'react-router-dom';
import { Route, withRouter} from 'react-router-dom';
import BookShowContainer from './book_show_container'; 
import ShelfIndexContainer from '../shelves/shelf_index_container';

class LoggedInBooksIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleOverview = this.handleOverview.bind(this);
        this.showBook = this.showBook.bind(this);
    }
    componentDidMount() {
        this.props.fetchBooks();
    }




 
    handleOverview(overview){
    if(typeof overview === 'undefined'){
        return
    }
       let chars = overview.split('');
       let overviewSnippet = []
       let maxWords = 300;

       for (let index = 0; index < maxWords; index++) {
           overviewSnippet.push(chars[index]);
       }
       
    return overviewSnippet.join('');
    }
    showBook(bookId){
        this.props.history.push(`/books/${bookId}`)
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
                    <li className="book-description">{this.handleOverview(book.overview)}<span>...</span><span id="continue"onClick={() => this.showBook(book.id)}>Continue reading</span></li>

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

export default withRouter(LoggedInBooksIndex);