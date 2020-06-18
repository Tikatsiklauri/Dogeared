import React from 'react'


class ShelfShow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (!this.props.shelf) return (<div>oh no</div>);
        return(
            <div>
                <ul>
                    {this.props.shelf.books_ids.map(book_id => {
                        let book = this.props.books[book_id]
                        if (book){
                        return( <li key={book_id}>
                            {book.title}
                        </li>)
                        }else{
                            return <li key={book_id}>ooof book not loaded</li>
                        }
                    })}
                </ul>
            </div>
        )
    }



}

export default ShelfShow;
