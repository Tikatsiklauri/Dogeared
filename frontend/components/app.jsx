import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import NavbarContainer from './navbar_logged_in/navbar_container';
import SplashContainer from './splash/splash_container';
import LoginFromContainer from './session_forms/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
         {/* <header>
            <h1>Welcome to Dogeared!</h1>
        </header>
       */}
     
        <AuthRoute to="/" component={SplashContainer}/> 
        <ProtectedRoute to="/navbar" component={NavbarContainer}/>
    </div>
);

export default App;