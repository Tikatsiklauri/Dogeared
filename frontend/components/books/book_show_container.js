import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { logout } from '../../actions/session_actions';
import { fetchReviews } from '../../util/reviews_api_util';


const msp = (state, ownProps) => {
    // debugger
    return {
    book: state.entities.books[ownProps.match.params.bookId],
    reviews: Object.values(state.entities.reviews)
    }
}

const mdp = dispatch => ({
    fetchBook: id => dispatch(fetchBook(id)),
    logout: () => dispatch(logout()),
    fetchReviews: (book_id) => dispatch(fetchReviews(book_id))
})

export default connect(msp, mdp)(BookShow)