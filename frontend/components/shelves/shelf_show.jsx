import React from 'react';
import { Link } from 'react-router-dom';

class ShelfShow extends React.Component {
    constructor(props) {
        super(props)
        this.removeBookfromShelf = this.removeBookfromShelf.bind(this)
    }

    removeBookfromShelf() {
        debugger
        this.props.deleteShelving(this.props.shelf.id)
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
                            <div className="bookOnShelfUl">
                                <Link to={`/books/${book.id}`}><div className="bookOnShelf" key={book_id}>
                                    <img className="shelfBookImage" src={book.image_url}/>
                                </div>  
                                </Link> 
                                <Link to={`/books/${book.id}`}><div className="bookTitle">
                                    {book.title}
                                </div>  
                                </Link> 
                                <div className="bookAuthor">{book.author}</div>
                               <div onClick={this.removeBookfromShelf}>x</div>
                            </div>
                        )
                        } else {
                            return <div key={book_id}>ooof book not loaded</div>
                        }
                    })}
                </ul>
            </div>
         </div>
        )
    }



}

export default ShelfShow;
