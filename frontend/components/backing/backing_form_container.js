import {connect} from 'react-redux';
import {createBacking} from '../../actions/backing_actions';
import BackingForm from './backing_form';

const mapDispatchToProps = (dispatch) => ({
  createBacking: backing => dispatch(createBacking(backing))
});

export default connect(
  null,
  mapDispatchToProps
)(BackingForm);
