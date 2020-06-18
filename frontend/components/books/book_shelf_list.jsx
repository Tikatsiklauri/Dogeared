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

   addBooktoShelf(shelf_id) {
      
       this.props.createShelving( this.props.book_id, shelf_id, this.props.shelves[0].id ); 
    
   }

   render() {
    //    debugger
       const {shelves} = this.props;
       let eachShelf = shelves.slice(1).map((shelf) => {
           return (
               <li className="shelfButtonItem" onClick={() => this.addBooktoShelf(shelf.id)}>
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