import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { logout } from '../../actions/session_actions';


const msp = (state, ownProps) => {
    // debugger
    return {
    book: state.entities.books[ownProps.match.params.bookId]
    }
}

const mdp = dispatch => ({
    fetchBook: id => dispatch(fetchBook(id)),
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(BookShow)