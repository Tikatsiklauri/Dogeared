import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import formTypeReducer from './form_type_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    formType: formTypeReducer
});

export default entitiesReducer;