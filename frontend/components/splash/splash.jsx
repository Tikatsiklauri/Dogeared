import React from 'react'
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { errors } = this.props

        const showErrors = errors.map((error, idx) => {
            return (
                <li key={idx}>
                    {error}
                </li>
            )
        })
        return (
            <div className="allsplash">
                <div className="books-image">
                    <header className="header-box">
                        <div className="logo">Dog<span className="logo-part2">Eared</span></div>
                        <div className="login-container"><LoginFormContainer /></div>
                    </header>
                        <div className="signup-div">
                            <div className="splash-message">
                                <div className="first-line">Dog ear your next
                                <p>favorite book</p>
                                </div>
                                
                            </div>
                                <ul className="error-messages">{showErrors}</ul>
                                <div className='signup-container'><SignupFormContainer /></div>
                        </div>
                </div>  
            </div>
        )
    }
}

export default Splash;