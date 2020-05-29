import React from 'react';
<<<<<<< HEAD
import {withRouter} from 'react-router-dom';
=======
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from '../navbar_logged_in/navbar_container';
>>>>>>> master


class BookShow extends React.Component {
    constructor(props) {
        super(props)
<<<<<<< HEAD
        this.handleClick = this.handleClick.bind(this);
=======
        // this.handleClick = this.handleClick.bind(this);
        this.handleClick = this.handleClick.bind(this)
>>>>>>> master
    }
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId)
    }
<<<<<<< HEAD
    handleClick() {
        this.props.history.replace("/")
=======
    // handleClick() {
    //     this.props.history.replace("/")
    // }
    handleClick() {
        // <Redirect to="/navbar" component={NavbarContainer} />
        this.props.history.push('/navbar')
>>>>>>> master
    }

    render() {
        const { book } = this.props;
        // debugger
        return (
            <div>
                <nav className="main-header-nav">
                    <div className="small-logo">Dog<span className="small-logo-part2">Eared</span></div>
                    <ul className="personal-menu">
                        <li className="clickable" role="button" aria-haspopup="true" onClick={this.handleClick}>Home</li>
                        <li className="clickable" role="button" aria-haspopup="true">My Books</li>
                        <li className="clickable" role="button" aria-haspopup="true">Browse</li>
<<<<<<< HEAD
                        <li className="clickable" role="button" aria-haspopup="true" onClick={this.handleClick}>Sign In</li>
                        <li className="clickable" role="button" aria-haspopup="true" onClick={this.handleClick}>Join</li>    
=======
>>>>>>> master
                    </ul>
                    <button className="logout" onClick={this.props.logout}>Sign out</button>
                </nav>
            <div className="full-page">
            <div className="book-section">
                <div className="book-details-div">
                    <div className="image">
                        <img src={book.image_url} alt={book.title}/>
                    </div>
                </div>
                    <div className="book-info">
                        <ul className="description-area">
                            <li className="title">{book.title}</li>
                            <li className="author">{`by ${book.author}`}</li>
                            <li className="overview">{book.overview}</li>
                        </ul>
                    </div>
            </div>
            </div>
        </div>
        )
    }
}

export default withRouter(BookShow);