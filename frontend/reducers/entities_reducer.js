import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
<<<<<<< HEAD
import formTypeReducer from './form_type_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    formType: formTypeReducer
=======
import booksReducer from './books_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer
>>>>>>> Books
});

export default entitiesReducer;