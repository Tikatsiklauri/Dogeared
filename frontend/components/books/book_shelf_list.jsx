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
       
    }

   addBooktoShelf(shelf_id) {
     return e => {
       this.props.createShelving( this.props.book_id, shelf_id, this.props.shelves[0].id );
       e.currentTarget.parentNode.parentNode.firstElementChild.innerHTML = this.props.moreShelf[shelf_id].name
      }
    
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
      //  debugger
       const {shelves} = this.props;
       let shelfId = this.props.user.books[this.props.book_id]
       let buttonText = 'Want to Read'
       if(shelves.length){
          buttonText = shelfId ? this.props.moreShelf[shelfId].name : 'Want to Read'
       }
       let eachShelf = shelves.slice(1).map((shelf) => {
           return (
             <li
               key={shelf.id}
               className="shelfButtonItem"
               onClick={this.addBooktoShelf(shelf.id, buttonText)}
             >
               {shelf.name}
             </li>
           );
       })
  
       return (
         <div>
            <button className="addToShelfButton" onClick={this.showMenu}>{buttonText}</button>
            {this.state.showMenu
            ?
            <div className="shelfDisplay" >{eachShelf}</div>
            :
            null
            }
         </div>
       );
   }

}

export default BookShelfList;