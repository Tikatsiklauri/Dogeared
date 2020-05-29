import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { fetchBooks } from '../../actions/book_actions';

const msp = (state) => {
    return {
        currentUser: state.session.id,
        books: Object.values(state.entities.books)
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    fetchBooks: () => dispatch(fetchBooks())
});

export default connect(msp, mdp)(Navbar);