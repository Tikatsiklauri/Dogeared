import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Splash from './splash/splash';
import LoginFromContainer from './session_forms/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>Welcome to Dogeared!</h1>
        </header>
      
        <Splash />
       
        {/* <Route to='/' component={LoginFromContainer}/>  */}
    </div>
);

export default App;