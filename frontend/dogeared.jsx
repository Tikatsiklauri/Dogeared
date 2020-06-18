import React from 'react'
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from "./actions/session_actions";


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        console.log(window.currentUser)
        const preloadedState = {
            entities: {
                users: { [window.currentUser.user.id]: window.currentUser.user }
            },
            session: { id: window.currentUser.user.id }
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
    window.dispatch = store.dispatch;
// TESTING
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)
});