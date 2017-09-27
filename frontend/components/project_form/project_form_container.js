import {connect} from 'react-redux';
import {createProject, updateProject} from '../../actions/project_actions';
import {createReward} from '../../actions/reward_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  projects: state.entities.projects
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: ownProps.location.pathname.includes('new') ?
    project => dispatch(createProject(project)) :
    project => dispatch(updateProject(project)),
  createReward: (reward, project_id) => dispatch(createReward(reward, project_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
