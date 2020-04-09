import React from 'react';

class SignupForm extends React.Component {
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
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                   <ul>{showErrors}</ul>
                    <div className="signup-form">
                        <h3>New here? Create a free account!</h3>
                        <br />
                        <input type="text"
                            value={this.state.name}
                            placeholder="Name"
                            onChange={this.update('name')}
                            className="sigup-input-box"
                        />
                        <br/>
                        <input type="text"
                            value={this.state.email}
                            placeholder="Email adress"
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
            </div>
        );
    }


};

export default SignupForm;
