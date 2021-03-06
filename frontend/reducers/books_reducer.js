import { 
    RECEIVE_ALL_BOOKS, 
    RECEIVE_BOOK,
    REMOVE_BOOK 
} from '../actions/book_actions';


const booksReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ALL_BOOKS:
            return Object.assign({}, action.books);
        case RECEIVE_BOOK:
            return Object.assign({}, state, action.books);
        case REMOVE_BOOK:
            newState = Object.assign({}, state);
            delete newState[action.bookId];
            return newState;
        default:
            return state;
    }
}

export default booksReducer;