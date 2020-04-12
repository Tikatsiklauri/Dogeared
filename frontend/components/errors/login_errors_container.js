import { connect } from 'react-redux';
import LoginErrors from './login_errors';
import {login, signup, resetErrors} from '../../actions/session_actions';

const msp = (state) => {
   return {
    errors: state.errors.session,
    formType: state.entities.formType
   } 
};

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    resetErrors: () => dispatch(resetErrors())

})

export default connect(msp, mdp)(LoginErrors);