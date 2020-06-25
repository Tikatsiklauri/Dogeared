import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShelfShow from './shelf_show';
import { deleteShelving } from '../../actions/shelving_actions';

const msp = (state, ownProps) => {
    return {
       shelf: state.entities.shelves[ownProps.match.params.shelfId],
       books: state.entities.books
    }
}

const mdp = (dispatch) => ({
    deleteShelving: (shelfId) => dispatch(deleteShelving(shelfId))
});

export default withRouter(connect(msp, mdp)(ShelfShow));