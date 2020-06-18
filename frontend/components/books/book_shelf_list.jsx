import React from 'react';
import { fetchShelves } from '../../actions/shelf_actions';

class BookShelfList extends React.Component {
    constructor(props) {
        super(props)
        this.addBooktoShelf = this.addBooktoShelf.bind(this)

    }

    componentDidMount() {
        this.props.fetchShelves()
       
    }

   addBooktoShelf() {
       debugger
       this.props.shelves.map(shelf => {
    //    this.props.createShelving({ book_id: this.props.book_id, shelf_id: shelf.id });

       this.props.createShelving({ book_id: this.props.book_id, shelf_id: shelf.id }); 
       })
   }

   render() {
    //    debugger
       const {shelves} = this.props;
       let eachShelf = shelves.map((shelf) => {
           return (
               <li className="shelfButtonItem" onClick={this.addBooktoShelf}>
                   {shelf.name}
               </li>
           )
       })
       return (
           <div>{eachShelf}</div> 
       )
   }

}

export default BookShelfList;