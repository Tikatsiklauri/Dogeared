import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import Splash from './splash';

const msp = (state) => {
    // debugger
    return {
        currentUser: state.session.id,
        errors: state.errors.session
    }
};

// const mdp = dispatch => ({
//     signup: user => dispatch(signup(user)),
//     login: user => dispatch(login(user))
// });

export default connect(msp, null)(Splash);