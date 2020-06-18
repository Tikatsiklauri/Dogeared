import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShelfShow from './shelf_show';

const msp = (state, ownProps) => {
    return {
       shelf: state.entities.shelves[ownProps.match.params.shelfId],
       books: state.entities.books
    }
}

const mdp = (dispatch) => ({

});

export default withRouter(connect(msp, mdp)(ShelfShow));