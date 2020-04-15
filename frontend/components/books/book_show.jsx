import React from 'react';
import { withRouter } from 'react-router-dom';


class BookShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId)
    }
    handleClick() {
        this.props.history.replace("/")
    }

    render() {
        const { book } = this.props;
        return (
            <div>
                <nav className="main-header-nav">
                    <div className="small-logo">Dog<span className="small-logo-part2">Eared</span></div>
                    <ul className="personal-menu">
                        <li className="clickable" role="button" aria-haspopup="true">Home</li>
                        <li className="clickable" role="button" aria-haspopup="true">My Books</li>
                        <li className="clickable" role="button" aria-haspopup="true">Browse</li>
                        <li className="clickable" role="button" aria-haspopup="true" onClick={this.handleClick}>Sign In</li>
                        <li className="clickable" role="button" aria-haspopup="true" onClick={this.handleClick}>Join</li>
                    </ul>

                </nav>
                <div className="book-details-div">
                    <div className="image">
                        <img src={book.image_url} alt={book.title} />
                    </div>
                    <div className="book-info">
                        <ul className="description-area">
                            <li className="title">{book.title}</li>
                            <li className="author">{`By ${book.author}`}</li>
                            <li className="overview">{book.overview}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BookShow);