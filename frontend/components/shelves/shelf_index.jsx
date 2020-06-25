import React from 'react';
import { Link } from 'react-router-dom';
import ShelfShowContainer from './shelf_show_container';

class ShelfIndex extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
        addShelf: false,
        name: "",
        user_id: null
      }
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.addShelf = this.addShelf.bind(this);
    }

    componentDidMount() {
        this.props.fetchShelves();
        this.props.fetchBooks()
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createShelf({ name: this.state.name, user_id: this.props.userId });
        this.setState({ addShelf: false, name: "" })
    }
    update(name) {
      return e => this.setState({
      [name]: e.target.value
    });
  }

  addShelf() {
    // debugger
    this.setState({ addShelf: true, user_id: this.props.userId })
  }


  AddShelfInput() {
    if (this.state.addShelf === true) {
      return (
        <form className="addShelfForm" onSubmit={this.handleSubmit}>
          <span className="addShelfText">Add a Shelf:</span>
          <input type="text" className="addShelfInput" id="add-shelf-input" value={this.state.name} onChange={this.update('name')}></input>
          <input type="submit" className="addBookButton" value="add"></input>
        </form>)
    } else {
      return (
        <button className="bookshelvesButton" onClick={this.addShelf}>Add shelf:</button>
      )
    }
  }
    render () {
   
    
        let bookshelves = Object.values(this.props.shelves).map(shelf => {
        return (
            <ul className="shelfUl" key={shelf.id}>
            <Link className="linkLi" to={`/shelves/${this.props.userId}/${shelf.id}`}><li className = "eachShelf" >{shelf.name} ({shelf.books_ids ? shelf.books_ids.length : '0'})</li></Link> 
            </ul>

        );
        })

        return (
          <div>
            <nav className="main-header-nav">
              <Link id="smallLogoLink" to={"/navbar"}>
                <div className="small-logo">
                  Dog<span className="small-logo-part2">Eared</span>
                </div>
              </Link>
              <ul className="personal-menu">
                <Link id="homeButtonLink" to={"/navbar"}>
                  <li className="clickable" role="button" aria-haspopup="true">
                    Home
                  </li>
                </Link>

                <li className="clickable" role="button" aria-haspopup="true">
                  My Books
                </li>
                {/* <li className="clickable" role="button" aria-haspopup="true">
                  Browse
                </li> */}
              </ul>

              <button className="logout" onClick={this.props.logout}>
                Sign out
              </button>
            </nav>
            <div><h1 id="mybooksTitle">My Books</h1></div>
            <div className="bookshelfDiv">
              <h1 id="shelfTitle">Bookshelves</h1>
              {bookshelves}
              {this.AddShelfInput()}
              {/* {allShelfBooks} */}
            </div>
            <ShelfShowContainer/>

          </div>
          
        );
    }
}

export default ShelfIndex;