import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import NavbarContainer from './navbar_logged_in/navbar_container';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginErrorsContainer from '../components/errors/login_errors_container';
import BookShowContainer from '../components/books/book_show_container';



const App = () => (
    <div>
            <AuthRoute exact path="/" component={SplashContainer}/> 
            <AuthRoute exact path="/errors" component={LoginErrorsContainer} />
            <Switch>
            <ProtectedRoute exact path="/navbar" component={NavbarContainer}/>
            <ProtectedRoute path="/books/:bookId" component={BookShowContainer} />
            </Switch>
        {/* <Route to="/books/:bookId" component={BookShowContainer} /> */}
    </div>
);

export default App;