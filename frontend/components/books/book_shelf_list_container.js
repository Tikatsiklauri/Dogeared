import { connect } from 'react-redux';
import { fetchShelf, fetchShelves } from '../../actions/shelf_actions';
import { createShelving } from '../../actions/shelving_actions';
import BookShelfList from './book_shelf_list';

const msp = (state) => {
    // debugger
    return {
    shelves: Object.values(state.entities.shelves)
    }
}

const mdp = dispatch => ({
    fetchShelves: () => dispatch(fetchShelves()),
    fetchShelf: (id) => dispatch(fetchShelf(id)),
    createShelving: (book_id, shelf_id, all_id) => dispatch(createShelving(book_id, shelf_id, all_id))
})

export default connect(msp, mdp)(BookShelfList);