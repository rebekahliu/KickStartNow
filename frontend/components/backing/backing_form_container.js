import {connect} from 'react-redux';
import {createBacking} from '../../actions/backing_actions';
import BackingForm from './backing_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createBacking: backing => dispatch(createBacking(backing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackingForm);
