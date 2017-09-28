import {connect} from 'react-redux';
import {createBacking} from '../../actions/backing_actions';
import RewardShow from './reward_show';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createBacking: backing => dispatch(createBacking(backing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardShow);
