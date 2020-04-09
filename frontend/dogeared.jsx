import React from 'react'
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from "./util/session_api_util";


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
// TESTING
    window.getState = store.getState;
    window.login = login;
    window.logout = logout;
// TESTING
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)
});