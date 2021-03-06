import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginErrors extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            email: '',
            password: '',
            showLoginPage: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleButton = this.handleButton.bind(this)
        
        this.demoUser = {
            name: 'demouser',
            email: 'demo@user',
            password: 'testtest'
        }
    }

    componentWillMount() {
        const {formType, pushFormType} = this.props;
        if(formType === 'signup'){
            this.setState({showLoginPage: true})
        } else {
            this.setState({showLoginPage: false});
        }
    }


    //first we are setting state inside componentdidmount based on formtype
    //then we are using componentdidupdate to see if there was a state change
    // inside handle click change the state(hopefuelly this causes rerender without componnodentupdate)
    handleButton() {
        this.props.resetErrors();
        this.props.history.replace("/");
    }

    

    handleClick() {
        this.props.resetErrors();
        const currentState = this.state.showLoginPage;
        this.setState({showLoginPage: !currentState})
        // this.props.history.replace("/")
    }

    handleSubmit(e) {
        const {showLoginPage} = this.state;
        e.preventDefault();
        const user = Object.assign({}, this.state)
        if(!showLoginPage){ //the html booleans need to be flipped, they are incorrect. 
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
        const { showLoginPage } = this.state;
    
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
                    <Link onClick={this.handleButton}><div className="sm-logo">Dog<span className="sm-logo-part2">Eared</span></div></Link>
                </div>
            
               <div className="main-content">
                   <div className="right-error-box">
                       {showLoginPage ? 
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
                           <button id="facebook"  onClick={this.handleButton}>Go back to Home Page</button>
                           <br/>
                            <button id="amazon" onClick={() => {
                                this.props.processForm(this.demoUser).then(() => this.props.history.push('/navbar'))}}>Continue with Demo User</button>
                       </div>
                       <div className="or-box">
                       <h2 id="or">or</h2>
                        </div>
                       {showLoginPage ? 
                       <div className="email-instead">Sign Up with Email</div>
                       :
                       null
                       }
                       {errors.length > 0 ?
                       <div className="error-flashmessage-box">
                            <ul className="error-message">{showErrors}</ul>
                       </div> 
                       : 
                       null
                        }
                       <div className="login-form-display">
                        <form onSubmit={this.handleSubmit} className="login-box">

                        {showLoginPage ? 
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
                            <label className="label">Email address
                            <input type="email"
                                value={this.state.email}
                                placeholder="you@yours.com"
                                onChange={this.update('email')}
                                className="signup-area"
                            />
                            </label>
                            <br/>
                            <label className="label">Password
                            <input type="password"
                                value={this.state.password}
                                placeholder=""
                                onChange={this.update('password')}
                                className="signup-area"
                                autoComplete='off'
                            />
                            </label>
                            <br/>
                            {
                                showLoginPage ?
                                <input id="signup" type="submit" value="Sign up"/>

                                :
                                <input id="signup" type="submit" value="Sign in"/>

                            }
                            { showLoginPage ?
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
