import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { logout } from '../../actions/session_actions';
import { fetchReviews } from '../../util/reviews_api_util';
import { fetchShelves } from '../../actions/shelf_actions';


const msp = (state, ownProps) => {
    // debugger
    return {
      book: state.entities.books[ownProps.match.params.bookId],
      reviews: Object.values(state.entities.reviews),
      allShelf: Object.keys(state.entities.shelves)[0],
    };
}

const mdp = dispatch => ({
    fetchBook: id => dispatch(fetchBook(id)),
    logout: () => dispatch(logout()),
    fetchReviews: (book_id) => dispatch(fetchReviews(book_id)),
    fetchShelves: () => dispatch(fetchShelves())
})

export default connect(msp, mdp)(BookShow)