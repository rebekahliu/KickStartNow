import {connect} from 'react-redux';
import {createProject, updateProject} from '../../actions/project_actions';
import {createReward, updateReward} from '../../actions/reward_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  projects: state.entities.projects,
  project: state.entities.project
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: ownProps.location.pathname.includes('new') ?
    project => dispatch(createProject(project)) :
    project => dispatch(updateProject(project)),
  processReward: ownProps.location.pathname.includes('new') ?
    reward => dispatch(createReward(reward)) :
    reward => dispatch(updateReward(reward))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
