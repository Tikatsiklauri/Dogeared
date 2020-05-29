import React from 'react';
import { Link } from 'react-router-dom';
import BookShowContainer from '../books/book_show_container';
import LoggedInBooksIndexContainer from '../books/loggedin_book_index_container';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     dropdown: false
        // }
        // this.handleDropdown = this.toggleDropdown.bind(this)
      
    }

    // componentDidMount() {
    //     this.props.fetchBooks();
    // }
 

    // toggleDropdown() {
    //    const currentState = this.state.dropdown
    //    this.setState({dropdown: !currentState})
    // }
    render() {
        // const { books } = this.props;
        // const displayBooks = books.map(book => {
        //     return (
        //         <div className="book-div">
        //             <li className="book">
        //                 <Link to={`/books/${book.id}`}><img src={book.image_url} /></Link>
        //              </li>
        //         </div>
        //     )
        // })
        return (
            <div>
                <nav className="main-header-nav">
                 <div className="small-logo">Dog<span className="small-logo-part2">Eared</span></div>
                    <ul className="personal-menu">
                        <li className="clickable" role="button" aria-haspopup="true">Home</li>
                        <li className="clickable" role="button" aria-haspopup="true">My Books</li>
                        <li className="clickable" role="button" aria-haspopup="true">Browse</li>
                        
                    </ul>
                       
                    <button className="logout" onClick={this.props.logout}>Sign out</button>
                   
                </nav>
            <div className="books-container">
              <LoggedInBooksIndexContainer />
            </div>
        </div>
        )
    }
}

export default Navbar;