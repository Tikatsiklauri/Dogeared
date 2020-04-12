import { connect } from 'react-redux';
import SignupErrors from './signup_errors';
import { signup, resetErrors } from '../../actions/session_actions';

const msp = (state) => ({
    errors: state.errors.session
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    resetErrors: () => dispatch(resetErrors())
})

export default connect(msp, mdp)(SignupErrors);