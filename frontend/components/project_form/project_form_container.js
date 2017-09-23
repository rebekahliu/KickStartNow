import {connect} from 'react-redux';
import {createProject, updateProject} from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  project: state.entities.project,
  formType: ownProps.location.pathname.slice(9)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: ownProps.location.pathname.slice(9) === 'new' ?
    project => dispatch(createProject(project)) :
    project => dispatch(updateProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
