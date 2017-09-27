import {connect} from 'react-redux';
import {getProject, destroyProject, resetProject} from '../../actions/project_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.project,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  getProject: projectId => dispatch(getProject(projectId)),
  removeProject: projectId => dispatch(destroyProject(projectId)),
  resetProject: () => dispatch(resetProject())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
