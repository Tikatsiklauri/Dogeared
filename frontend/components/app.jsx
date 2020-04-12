import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import NavbarContainer from './navbar_logged_in/navbar_container';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginErrorsContainer from '../components/errors/login_errors_container';
import SignupErrorsContainer from './signup-errors/signup_errors_container';

const App = () => (
    <div>
         {/* <header>
            <h1>Welcome to Dogeared!</h1>
        </header>
       */}

    <ProtectedRoute exact path="/navbar" component={NavbarContainer}/>
    <AuthRoute exact path="/moreErrors" component={SignupErrorsContainer}/>
    <AuthRoute exact path="/errors" component={LoginErrorsContainer}/>
    <AuthRoute  exact path="/" component={SplashContainer}/> 
    
    </div>
);

export default App;