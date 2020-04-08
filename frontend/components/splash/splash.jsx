import React from 'react'
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';


class Splash extends React.Component {
    render() {
        return (
            <div>This is my splash page!
                <div>
                    <LoginFormContainer />
                </div>
                    <SignupFormContainer />
            </div>
        )
    }
}

export default Splash;