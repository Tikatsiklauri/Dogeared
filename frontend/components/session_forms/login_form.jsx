import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const user = Object.assign({}, this.state)
        this.props.processForm(user) 
        // .then(() => this.props.history.push('/main'));  
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }


    render() {
        const { errors } = this.props
        
        const showErrors = errors.session.map((error, idx) => {
             return (
                <li key={idx}>
                    {error}
                </li>
             )
        })

        return (
            <div className="login-form-container">
             <form onSubmit={this.handleSubmit} className="login-form-box">
                    <ul>{showErrors}</ul>
                    <div className="login-form">
                     <br/>
                        <input type="text"
                        value={this.state.email}
                        placeholder="Email adress"
                        onChange={this.update('email')}
                        className="login-input-box"
                        />
                        <input type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                        className="login-input-box"
                        />
                        <input className="login-button" type="submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        );
    }


};

export default LoginForm;