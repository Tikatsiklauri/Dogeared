import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import MainContainer from './main_logged_in/main_container';
import SplashContainer from './splash/splash_container';
import LoginFromContainer from './session_forms/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        {/* <header>
            <h1>Welcome to Dogeared!</h1>
        </header>
      
        <Splash /> */}
       
        <AuthRoute to="/" component={SplashContainer}/> 
        <ProtectedRoute to="/main" component={MainContainer}/>
    </div>
);

export default App;