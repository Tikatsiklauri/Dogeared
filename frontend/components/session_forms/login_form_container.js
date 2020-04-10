import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = (state) => ({
    errors: state.errors,
    formType: 'Sign in'
});

const mdp = dispatch => {
    // debugger
    return{
    processForm: (user) => dispatch(login(user))
    }
};

export default connect(msp, mdp)(LoginForm);