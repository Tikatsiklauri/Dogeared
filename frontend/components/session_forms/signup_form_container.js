import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import { login } from '../../actions/session_actions'
import SignupForm from './signup_form';

const msp = (state) => ({
    errors: state.errors,
    formType: 'Sign up'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SignupForm);