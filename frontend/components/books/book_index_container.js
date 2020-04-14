import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/book_actions';
import BooksIndex from './books_index';

const msp = (state) => ({
    books: Object.values(state.entities.books)
})

const mdp = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks())
})

export default connect(msp, mdp)(BooksIndex);