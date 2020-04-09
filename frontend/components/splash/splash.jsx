import React from 'react'
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';


class Splash extends React.Component {
    render() {
        return (
            <div>
                <header className="header-box">
                    <div className="logo"> <div className="logo-part1">Dog</div><div className="logo1">Eared</div></div>
                    <div className="login-container">
                            <LoginFormContainer />
                    </div>
                </header>
                    <div className="main-masthead">
                        <img src={window.backgroundURL} alt="book picture background"/>
                    <div className="splash-message"><h3>Dog ear your next favorite book.</h3></div>
                        <SignupFormContainer />
                    </div>
            </div>
        )
    }
}

export default Splash;