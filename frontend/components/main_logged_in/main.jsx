import React from 'react';
import NavbarContainer from '../navbar_logged_in/navbar_container';

const Main = ({currentUser, logout}) => {
        return (
            <div>
               <div class="navbar-container-box">
                   <NavbarContainer />
               </div>
                <button onClick={logout}>Log Out</button>
            </div>
        )
}

export default Main;