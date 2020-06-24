import { connect } from 'react-redux';
import CreateReview from './create_review';
import { createReview, updateReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    debugger
    const review = {
        id: ownProps.id,
        book_id: ownProps.match.params.bookId,
        user_id: state.session.id,
        body: ownProps.body,
        rating: ownProps.rating

    }
   
    return {
        review,
        type: 'save',
        bookTitle: state.entities.books[ownProps.match.params.bookId].title,
        userName: state.entities.users[state.session.id].name
    }
   
}

const mdp = dispatch => {
    return {
        createReview: review => dispatch(createReview(review)),
        updateReview: review => dispatch(updateReview(review))

    }
}

export default withRouter(connect(msp, mdp)(CreateReview))
