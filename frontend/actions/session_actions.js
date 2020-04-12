import * as APIUtill from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const resetErrors = () => ({
    type: RESET_ERRORS
});

export const signup = user => dispatch => (
    APIUtill.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)), (e) => dispatch(receiveSessionErrors(e.responseJSON)))
);

export const login = user => dispatch => {
    return(
        APIUtill.login(user)
        .then((user) => dispatch(receiveCurrentUser(user)), (e) => dispatch(receiveSessionErrors(e.responseJSON)))
    )
};
export const logout = () => dispatch => {
    return (
        APIUtill.logout()
        .then((user) => dispatch(logoutCurrentUser(user)), (e) => dispatch(receiveSessionErrors(e.responseJSON)))
    )
};