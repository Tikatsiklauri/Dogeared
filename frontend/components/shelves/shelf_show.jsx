import React from 'react';
import { Link } from 'react-router-dom';

class ShelfShow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (!this.props.shelf) return (<div></div>);
        return(
        <div>
            
            <div className="shelfShowBookContainer">
                <ul className="bookList">
                    {this.props.shelf.books_ids.map(book_id => {
                        let book = this.props.books[book_id]
                        if (book){
                        return(
                            <ul className="bookOnShelfUl">
                                <Link to={`/books/${book.id}`}><li className="bookTitle">
                                    {book.title}
                                </li>  
                                </Link> 
                                <Link to={`/books/${book.id}`}><li className="bookOnShelf" key={book_id}>
                                    <img className="shelfBookImage" src={book.image_url}/>
                                </li>  
                                </Link> 
                               
                            </ul>
                        )
                        } else {
                            return <li key={book_id}>ooof book not loaded</li>
                        }
                    })}
                </ul>
            </div>
         </div>
        )
    }



}

export default ShelfShow;
