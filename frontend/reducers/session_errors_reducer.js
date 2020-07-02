import { 
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    RESET_ERRORS
} 
from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RESET_ERRORS:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return Object.values(action.errors);
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;