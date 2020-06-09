import { 
    RECEIVE_ALL_BOOKS, 
    RECEIVE_BOOK,
    REMOVE_BOOK 
} from '../actions/book_actions';
import {
    RECEIVE_BOOK_ON_SHELF,
    REMOVE_BOOK_ON_SHELF
} from '../actions/books_on_shelves_actions';

const booksReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ALL_BOOKS:
            return Object.assign({}, action.books);
        case RECEIVE_BOOK:
            return Object.assign({}, state, {[action.book.id]: action.book});
        case REMOVE_BOOK:
            newState = merge({}, state);
            delete newState[action.bookId];
            return newState;
        case RECEIVE_BOOK_ON_SHELF:
            return merge({}, state);
        case REMOVE_BOOK_ON_SHELF:
            newState = merge({}, state);
            delete newState[action.bookId];
            return newState;
        default:
            return state;
    }
}

export default booksReducer;