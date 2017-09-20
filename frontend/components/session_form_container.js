import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, signup} from '../actions/session_actions';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: Object.values(state.errors.session),
  formType: ownProps.location.pathname.slice(1)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: ownProps.location.pathname.slice(1) === 'login' ?
    user => dispatch(login(user)) :
    user => dispatch(signup(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
