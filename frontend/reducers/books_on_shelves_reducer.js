import {
    RECEIVE_BOOKS_ON_SHELVES,
    RECEIVE_BOOK_ON_SHELF,
    REMOVE_BOOK_ON_SHELF
} from '../actions/books_on_shelves_actions';

const shelfReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BOOKS_ON_SHELVES:
            return Object.assign({}, action.books_on_shelves);
        case RECEIVE_BOOK_ON_SHELF:
            return Object.assign({}, state, { [action.payload.id]: action.payload });
        case REMOVE_BOOK_ON_SHELF:
            newState = Object.assign({}, state);
            delete newState[action.book_on_shelfId];
            return newState;
        default:
            return state;
    }
}

export default shelfReducer;