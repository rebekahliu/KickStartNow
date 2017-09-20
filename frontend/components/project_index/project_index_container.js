import {connect} from 'react-redux';
import {getProjects} from '../../actions/project_actions';
import ProjectIndex from './project_index';

const mapStateToProps = state => ({
  projects: Object.values(state.entities.projects)
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
