import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginErrors extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    // componentDidMount() {
    //     this.props.resetErrors()
    // }
    handleClick() {
        // debugger
        this.props.resetErrors();
        // debugger
        this.props.history.replace("/")
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
        // .then(() => this.props.history.push('/navbar'));  
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
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
            <div className="errors-container">
               <div className="main-content">
                   <div className="right-error-box">
                       <div className="third-party-signin">
                           <button id="facebook" type="submit" value="Continue with Facebook">Continue with Facebook</button>
                           <br/>
                           <button id="amazon" type="submit" value="Continue with Amazon">Continue with Amazon</button>
                       </div>
                       <div className="error-flashmessage-box">
                            <ul className="error-message">{showErrors}</ul>
                       </div>
                       <div className="login-form-display">
                            <form onSubmit={this.handleSubmit} className="login-box">
                            <input type="email"
                                value={this.state.email}
                                placeholder="Email address"
                                onChange={this.update('email')}
                                className="login-input"
                            />
                            <br/>
                            <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                                className="login-input"
                                autoComplete='off'
                            />
                            <br/>
                            <input id="signin-button" type="submit" value="Sign in"/>
                            </form>
                            <div id="member">Not a member? <div onClick={this.handleClick}>Sign up</div></div>
                        </div>
                   </div>
               </div>

            </div>
        )
    }
}

export default withRouter(LoginErrors);
