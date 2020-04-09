import { connect } from 'react-redux';
import Main from './main';

const msp = (state) => {
    // debugger
    return {
    currentUser: state.session.id 
    }
};

// const mdp = dispatch => ({
//     logout: () => dispatch(logout())
// });

export default connect(msp, mdp)(Main);