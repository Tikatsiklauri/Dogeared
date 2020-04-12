import { connect } from 'react-redux';
import LoginErrors from './login_errors';
import {login, resetErrors} from '../../actions/session_actions';

const msp = (state) => ({
    errors: state.errors.session
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
})

export default connect(msp, mdp)(LoginErrors);