import React from 'react'


class ShelfShow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (!this.props.shelf) return (<div>oh no</div>);
        return(
            <div className="shelfShowBookContainer">
                <ul className="bookList">
                    {this.props.shelf.books_ids.map(book_id => {
                        let book = this.props.books[book_id]
                        if (book){
                        return(
                            <ul className="bookOnShelfUl">
                                 <li className="bookOnShelf" key={book_id}>
                                    <img className="shelfBookImage" src={book.image_url}/>
                                </li>  
                                <li>
                                    {book.title}
                                </li>  
                            </ul>
                        )
                        } else {
                            return <li key={book_id}>ooof book not loaded</li>
                        }
                    })}
                </ul>
            </div>
        )
    }



}

export default ShelfShow;
