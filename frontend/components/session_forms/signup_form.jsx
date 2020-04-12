import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.demoUser = {
            name: 'demouser',
            email: 'demo@user',
            password: 'testtest'
        }

        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }


    render() {
        let errors = this.props.errors
        if (errors.length > 0) {
            return <Redirect to="/moreErrors" />
        }

        return (
            <div className="signup-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                   {/* <ul id="errors">{showErrors}</ul> */}
                    <div className="signup-form">
                        <h3 id="signup-message">New here? Create a free account!</h3>
                        <br />
                        <input type="text"
                            value={this.state.name}
                            placeholder="Name"
                            onChange={this.update('name')}
                            className="signup-input-box"
                        />
                        <br/>
                        <input type="email"
                            value={this.state.email}
                            placeholder="Email address"
                            onChange={this.update('email')}
                            className="signup-input-box"
                        />
                        <br/>
                        <input type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update('password')}
                            className="signup-input-box"
                        />
                        <br/>
                        <input className="signup-button" type="submit" value={this.props.formType} />
                    </div>
                </form>
                <form id="demo-user">
                    <button className="demo-button" onClick={() => {
                        // debugger
                        this.props.login(this.demoUser).then(() => this.props.history.push('/navbar'))
                    }} type="submit" value="Demo">Demo</button>
                </form>
            </div>
        );
    }


};

export default SignupForm;
