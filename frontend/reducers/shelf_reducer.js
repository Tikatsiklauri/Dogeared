import {
    RECEIVE_ALL_SHELVES,
    RECEIVE_SHELF,
    REMOVE_SHELF
} from '../actions/shelf_actions';

const shelfReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_SHELVES:
            return Object.assign({}, action.shelves);
        case RECEIVE_SHELF:
            return Object.assign({}, state, { [action.payload.id]: action.payload });
        case REMOVE_SHELF:
            newState = Object.assign({}, state);
            delete newState[action.shelfId];
            return newState;
        default:
            return state;
    }
}

export default shelfReducer;