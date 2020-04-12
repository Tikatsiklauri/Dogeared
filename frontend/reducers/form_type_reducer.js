import {RECEIVE_FORM_TYPE} from '../actions/session_actions';

 const formTypeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FORM_TYPE:
            return action.formType;
        default:
            return state;
    }
};

export default formTypeReducer;