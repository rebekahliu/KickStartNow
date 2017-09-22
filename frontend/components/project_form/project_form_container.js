import {connect} from 'react-redux';
import {createProject} from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(
  null,
  mapDispatchToProps
)(ProjectForm);
