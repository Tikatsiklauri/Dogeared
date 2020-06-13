import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import formTypeReducer from './form_type_reducer';
import booksReducer from './books_reducer';
import shelf_reducer from './shelf_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    formType: formTypeReducer,
    books: booksReducer,
    shelves: shelf_reducer, 
});

export default entitiesReducer;