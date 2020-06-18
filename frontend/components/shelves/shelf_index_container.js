import { connect } from 'react-redux';
import ShelfIndex from './shelf_index';
import { fetchShelves, fetchShelf, createShelf, deleteShelf } from '../../actions/shelf_actions';
import { fetchBooks } from '../../actions/book_actions';
import { logout } from "../../actions/session_actions";


const msp = (state, ownProps) => {
    return {
        userId: state.session.id,
        shelves: state.entities.shelves
    }
}

const mdp = (dispatch) => ({
  fetchShelves: () => dispatch(fetchShelves()),
  fetchShelf: (id) => dispatch(fetchShelf(id)),
  createShelf: (shelf) => dispatch(createShelf(shelf)),
  deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId)),
  logout: () => dispatch(logout()),
  fetchBooks: () => dispatch(fetchBooks())
});

export default connect(msp, mdp)(ShelfIndex);