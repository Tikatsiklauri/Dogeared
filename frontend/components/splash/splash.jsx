import React from 'react'
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import BookIndexContainer from '../books/book_index_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // const { errors } = this.props

        // const showErrors = errors.map((error, idx) => {
        //     return (
        //         <li key={idx}>
        //             {error}
        //         </li>
        //     )
        // })
        return (
            <div className="main">
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
                            <div className='signup-container'><SignupFormContainer /></div>
                        </div> 
                    </div>
                </div>
                <div className="text-section">
                    <div className="suggest-texts"><h3>Deciding which treat you would like next?</h3>
                        <p>You’re in the right place. Tell us what titles or genres you’ve 
                            enjoyed in the past, and we’ll give you surprisingly insightful 
                            recommendations.
                        </p>
                    </div>
                    <div className="suggest-texts"><h3>What treats do your friends like?</h3>
                         <p>Chances are your friends are discussing their favorite (and least favorite)
                            books on Goodreads.
                        </p>
                    </div>
                </div> 
                <div className="books-section">
                    <h4>Weekly Treats</h4>
                    <BookIndexContainer />
                </div>
           </div>
            
        )
    }
}

export default Splash;