import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from '../navbar_logged_in/navbar_container';
import BookShelfListContainer from './book_shelf_list_container';
import CreateReviewContainer from '../reviews/create_review_container';


class BookShow extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.handleMyBooksClick = this.handleMyBooksClick.bind(this)
    }
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId)
        // this.props.fetchReviews(this.props.match.params.bookId)
    }
    // handleClick() {
    //     this.props.history.replace("/")
    // }
    handleClick() {
        // <Redirect to="/navbar" component={NavbarContainer} />
        this.props.history.push('/navbar')
    }

    handleMyBooksClick() {
        this.props.history.push('/shelves/:userId/:shelfId')
    }

  

    render() {
        const { book } = this.props;
        if(!book) return <div>Loading</div>
        // debugger
        return (
            <div>
                <nav className="main-header-nav">
                    <div className="small-logo">Dog<span className="small-logo-part2">Eared</span></div>
                    <ul className="personal-menu">
                        <li className="clickable" role="button" aria-haspopup="true" onClick={this.handleClick}>Home</li>
                        <li className="clickable" role="button" aria-haspopup="true" onClick={this.handleMyBooksClick}>My Books</li>
                        {/* <li className="clickable" role="button" aria-haspopup="true">Browse</li> */}
                    </ul>
                    <button className="logout" onClick={this.props.logout}>Sign out</button>
                </nav>
            <div className="full-page">
            <div className="book-section">
                <div className="book-details-div">
                    <div className="image">
                        <img src={book.image_url} alt={book.title}/>
                        <div><BookShelfListContainer/></div>
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
            
            <div>
                <CreateReviewContainer/>
            </div>
            <div>
                <div className="communityReviews">COMMUNITY REVIEWS</div>
                <div className="reviewsArea">
                    {this.props.reviews.map(review => (
                        <div className="reviewsDiv">
                            <div className="usernameAndRate">
                                <p className="reviewUserName">{review.name}</p>
                                <p className="ratedIt">{`rated it ${review.rating} stars`}</p>
                            </div>
                            <p>{review.body} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(BookShow);