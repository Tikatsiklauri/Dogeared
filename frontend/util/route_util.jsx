import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter} from 'react-router-dom';

const msp = state => ({
    loggedIn: Boolean(state.session.id)
});

const Auth = ({loggedIn, path, component: Component}) => (
    <Route 
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/main" /> : <Component {...props} />
        )}
    /> 
);

const Protected = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));