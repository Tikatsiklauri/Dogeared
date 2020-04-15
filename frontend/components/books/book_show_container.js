import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';


const msp = (state, ownProps) => ({
    book: state.entities.books[ownProps.match.params.bookId]
})

const mdp = dispatch => ({
    fetchBook: id => dispatch(fetchBook(id))
})

export default connect(msp, mdp)(BookShow)