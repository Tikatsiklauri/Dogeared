import React from 'react';
import { Link } from 'react-router-dom';


class ShelfIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchShelves();
    }
    render () {
        let bookshelves = Object.values(this.props.shelves).map(shelf => {
        return (
            <ul className="shelfUl">
              <li className="eachShelf">{shelf.name}</li>
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
                <li className="clickable" role="button" aria-haspopup="true">
                  Browse
                </li>
              </ul>

              <button className="logout" onClick={this.props.logout}>
                Sign out
              </button>
            </nav>
            <div><h1 id="mybooksTitle">My Books</h1></div>
            <div className="bookshelfDiv">
              <h1 id="shelfTitle">Bookshelves</h1>
              {bookshelves}
            </div>
          </div>
        );
    }
}

export default ShelfIndex;