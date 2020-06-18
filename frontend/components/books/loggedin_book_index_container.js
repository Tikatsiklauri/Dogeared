import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/book_actions';
import { requestShelvings } from '../../actions/shelving_actions';
import LoggedInBooksIndex from './loggedin_book_index';

const msp = (state) => ({
    books: Object.values(state.entities.books),
    shelvings: state.entities.shelvings
})

const mdp = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks()),
    requestShelvings: () => dispatch(requestShelvings())
})

export default connect(msp, mdp)(LoggedInBooksIndex)