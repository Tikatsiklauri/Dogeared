import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import formTypeReducer from './form_type_reducer';
import booksReducer from './books_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    formType: formTypeReducer
    books: booksReducer
});

export default entitiesReducer;