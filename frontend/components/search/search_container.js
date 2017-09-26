import {connect} from 'react-redux';
import {getProject, destroyProject, resetProject} from '../../actions/project_actions';
import {createBacking} from '../../actions/backing_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.project,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  getProject: projectId => dispatch(getProject(projectId)),
  removeProject: projectId => dispatch(destroyProject(projectId)),
  createBacking: backing => dispatch(createBacking(backing)),
  resetProject: () => dispatch(resetProject())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
