import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    CREATE_REVIEW,
    UPDATE_REVIEW,
    DELETE_REVIEW
} from "../actions/review_actions";
import { 
    RECEIVE_BOOK,
} from '../actions/book_actions';
import merge from 'lodash/merge';

const reviewsReducer =  (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOK:
            return merge({}, action.reviews)
        case RECEIVE_REVIEWS:
            return merge({}, action.reviews)
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.review.id]: action.review })
        case DELETE_REVIEW:
            let newState = merge({}, state);
            delete newState[action.reviewId.id];
            return newState;
        default:
            return state;
    }
} 

export default reviewsReducer;