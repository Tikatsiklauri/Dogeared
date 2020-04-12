import { connect } from 'react-redux';
import { signup, login, receiveFormType } from '../../actions/session_actions'
import SignupForm from './signup_form';


const msp = (state) => ({
    errors: state.errors,
    formTypeName: 'Sign up'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    
    formType: (formType) => dispatch(receiveFormType(formType))

});

export default connect(msp, mdp)(SignupForm);