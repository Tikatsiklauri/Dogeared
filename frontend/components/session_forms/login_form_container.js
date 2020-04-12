import { connect } from 'react-redux';
import { login,receiveFormType } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = (state) => ({
    errors: state.errors.session,
    formTypeName: 'Sign in'
});

const mdp = dispatch => {
    return{
    processForm: (user) => dispatch(login(user)),
        formType: (formType) => dispatch(receiveFormType(formType))

    }
};

export default connect(msp, mdp)(LoginForm);