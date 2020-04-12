import React from 'react';
// import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupErrors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

 

    handleSubmit(e) {
        e.preventDefault();
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
                            <br />
                            <button id="amazon" type="submit" value="Continue with Amazon">Continue with Amazon</button>
                        </div>
                        <div className="error-flashmessage-box">
                            <ul className="error-message">{showErrors}</ul>
                        </div>
                        <div className="signup-form-display">
                            <form onSubmit={this.handleSubmit} className="signup-input">
                                <input type="text"
                                    value={this.state.name}
                                    placeholder="Name"
                                    onChange={this.update('name')}
                                    className="signup"
                                />
                                <br />
                                <input type="email"
                                    value={this.state.email}
                                    placeholder="Email address"
                                    onChange={this.update('email')}
                                    className="signup"
                                />
                                <br />
                                <input type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.update('password')}
                                    className="signup"
                                />
                                <br />
                                <input id="signup-butt" type="submit" value="Sign up" />
                            </form>
                            <p id="member">Not a member? <Link to="/" >Sign in</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignupErrors;
