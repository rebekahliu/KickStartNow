import {connect} from 'react-redux';
import {getProject, destroyProject} from '../../actions/project_actions';
import {createBacking} from '../../actions/backing_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.project
});

const mapDispatchToProps = (dispatch) => ({
  getProject: projectId => dispatch(getProject(projectId)),
  removeProject: projectId => dispatch(destroyProject(projectId)),
  createBacking: backing => dispatch(createBacking(backing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
