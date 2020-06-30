import {
    RECEIVE_ALL_SHELVES,
    RECEIVE_SHELF,
    REMOVE_SHELF
} from '../actions/shelf_actions';
import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {REMOVE_SHELVING} from '../actions/shelving_actions';

const shelfReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_SHELVES:
        case RECEIVE_CURRENT_USER:
            return merge({}, action.shelves);
        case REMOVE_SHELVING:
            return Object.assign({}, state, action.payload)
        case RECEIVE_SHELF:
            return Object.assign({}, state, { [action.payload.id]: action.payload });
        case REMOVE_SHELF:
            newState = merge({}, state);
            delete newState[action.shelfId];
            return newState;
        default:
            return state;
    }
}

export default shelfReducer;