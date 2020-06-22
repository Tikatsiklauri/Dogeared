import React from 'react';
import { fetchShelves } from '../../actions/shelf_actions';

class BookShelfList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }

        this.addBooktoShelf = this.addBooktoShelf.bind(this)
        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    componentDidMount() {
        this.props.fetchShelves()
       
    }

   addBooktoShelf(shelf_id) {
      
       this.props.createShelving( this.props.book_id, shelf_id, this.props.shelves[0].id ); 
    
   }

   showMenu(e) {
       e.preventDefault();
       this.setState({showMenu: true}, () => {
        document.addEventListener('click', this.closeMenu)
       })
   }

   closeMenu() {
       this.setState({showMenu: false}, () => {
            document.removeEventListener('click', this.closeMenu)
       });
   }

   render() {
    //    debugger
       const {shelves} = this.props;
       let eachShelf = shelves.slice(1).map((shelf) => {
           return (
             <li
               key={shelf.id}
               className="shelfButtonItem"
               onClick={() => this.addBooktoShelf(shelf.id)}
             >
               {shelf.name}
             </li>
           );
       })
       return (
         <div>
            <button className="wantToReadButton" onClick={this.showMenu}>Want to Read</button>
            {this.state.showMenu
            ?
            <div>{eachShelf}</div>
            :
            null
            }
         </div>
       );
   }

}

export default BookShelfList;