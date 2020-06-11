import { connect } from 'react-redux';
import ShelfIndex from './shelf_index';
import { fetchShelves, fetchShelf, createShelf, deleteShelf } from '../../actions/shelf_actions';


const msp = (state, ownProps) => {
    debugger
    return {
        userId: state.session.id,
        shelfId: ownProps.match.params.userId,
        shelves: state.entities.shelves,
    }
}

const mdp = dispatch => ({
    fetchShelves: () => dispatch(fetchShelves()),
    fetchShelf: (id) => dispatch(fetchShelf(id)),
    createShelf: (shelf) => dispatch(createShelf(shelf)),
    deleteShelf: (shelfId) => dispatch(deleteShelf(shelfId))
})

export default connect(msp, mdp)(ShelfIndex);