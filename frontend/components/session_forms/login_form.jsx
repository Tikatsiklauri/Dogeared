import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
       
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeState = this.changeState.bind(this)

    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user) 
        // .then(() => this.props.history.push('/navbar'));  
    }
    
    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }
    changeState(){
        this.props.formType('login')
    }
    
    
    render() {
        let errors = this.props.errors
        if (errors.length > 0) {
           return <Redirect to="/errors"/>

        }
      

        return (
            <div className="login-form-container">
             <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                     <br/>
                        <input type="email"
                        value={this.state.email}
                        placeholder="Email address"
                        onChange={this.update('email')}
                        className="login-input-box"
                        />
                        <input type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                        className="login-input-box"
                        autoComplete='off'
                        />
                        <input id="login-button" type="submit" value={this.props.formTypeName} onClick={this.changeState}/>
                        {/* <ul id="errors">{showErrors}</ul> */}
                    </div>
                </form>
             
            </div>
        );
    }


};

export default withRouter(LoginForm);