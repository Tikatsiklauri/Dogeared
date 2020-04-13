import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginErrors extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
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
        this.props.resetErrors();
        this.props.history.replace("/")
    }

    handleSubmit(e) {
        const {formType} = this.props;
        e.preventDefault();
        const user = Object.assign({}, this.state)
        if(formType === 'login'){
            this.props.processForm(user)
        } else {
            this.props.signup(user)
        }
        // .then(() => this.props.history.push('/navbar'));  
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    render() {
        const { errors, formType } = this.props

        const showErrors = errors.map((error, idx) => {
            return (
                <li key={idx}>
                    {error}
                </li>
            )
        })
        return (
            <div className="errors-container">
                <div className="logo-container">
                    <div className="sm-logo">Dog<span className="sm-logo-part2">Eared</span></div>
                </div>
            
               <div className="main-content">
                   <div className="right-error-box">
                       {formType !== 'login' ? 
                            <div className="directions">Sign up for DogEared
                        <p className="reason-for-signup">
                            Sign up to see what your friends are reading, get book recommendations, 
                            <br/>
                            and join the world’s largest community of readers.</p>
                        </div>
                       :
                       <div className="directions">Sign in to DogEared</div>
                       }
                       <div className="third-party-signin">
                           <button id="facebook" type="submit" value="Continue with Facebook">Continue with Facebook</button>
                           <br/>
                           <button id="amazon" type="submit" value="Continue with Amazon">Continue with Amazon</button>
                       </div>
                       <div className="or-box">
                       <h2 id="or">or</h2>
                        </div>
                       {formType !== 'login' ? 
                       <div className="email-instead">Sign Up with Email</div>
                       :
                       null
                       }
                       <div className="error-flashmessage-box">
                            <ul className="error-message">{showErrors}</ul>
                       </div>
                       <div className="login-form-display">
                        <form onSubmit={this.handleSubmit} className="login-box">

                        {formType !== 'login' ? 
                            <label className="label">Name
                            <input type="text"
                            value={this.state.name}
                            placeholder="Name"
                            onChange={this.update('name')}
                            className="signup-area"
                            />
                            </label>
                        : 
                        null
                        }
                        <br />
                            <label className="label">Email
                            <input type="email"
                                value={this.state.email}
                                placeholder="Email address"
                                onChange={this.update('email')}
                                className="signup-area"
                            />
                            </label>
                            <br/>
                            <label className="label">Password
                            <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                                className="signup-area"
                                autoComplete='off'
                            />
                            </label>
                            <br/>
                            {
                                formType !== 'login' ?
                                <input id="signup" type="submit" value="Sign up"/>

                                :
                                <input id="signup" type="submit" value="Sign in"/>

                            }
                            { formType !== 'login' ?
                                <div id="member">Already a member? <div className="link" onClick={this.handleClick}>Sign in</div></div>
                                :
                                <div id="member">Not a member? <div className="link" onClick={this.handleClick}>Sign up</div></div>
                            }
                            </form>
                            

                            
                        </div>
                   </div>
               </div>
            </div>
           
        )
    }
}

export default withRouter(LoginErrors);
