import {connect} from 'react-redux';
import {getProject} from '../../actions/project_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  project: state
});

const mapDispatchToProps = (dispatch) => ({
  getProject: (projectId) => dispatch(getProject(projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
