import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import NavbarContainer from './navbar_logged_in/navbar_container';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginErrorsContainer from '../components/errors/login_errors_container';
import BookShowContainer from '../components/books/book_show_container';
import ShelfIndexContainer from './shelves/shelf_index_container';
import Footer from './footer/footer';



const App = () => (
    <div>
            <AuthRoute exact path="/" component={SplashContainer}/> 
            <AuthRoute path="/" component={Footer} />
            <AuthRoute exact path="/sign_in" component={LoginErrorsContainer} />
            <AuthRoute exact path="/sign_up" component={LoginErrorsContainer} />
            <Switch>
            <ProtectedRoute exact path="/navbar" component={NavbarContainer}/>
            <ProtectedRoute path="/books/:bookId" component={BookShowContainer} />
            <ProtectedRoute className="shelves" path="/shelves/:userId/:shelfId" component={ShelfIndexContainer} />
            <ProtectedRoute className="shelves" path="/shelves/:userId" component={ShelfIndexContainer} />
            </Switch>
            <ProtectedRoute path="/navbar" component={Footer} />
            <ProtectedRoute path="/books/:bookId" component={Footer} />
             <ProtectedRoute path="/shelves/:userId" component={Footer} />
        {/* <Route to="/books/:bookId" component={BookShowContainer} /> */}
    </div>
);

export default App;