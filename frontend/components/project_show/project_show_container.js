import {connect} from 'react-redux';
import {getProject, destroyProject} from '../../actions/project_actions';
import ProjectShow from './project_show';
import {selectProjectRewards} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.project
});

const mapDispatchToProps = (dispatch) => ({
  getProject: projectId => dispatch(getProject(projectId)),
  removeProject: projectId => dispatch(destroyProject(projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
