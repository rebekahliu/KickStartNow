import React from 'react';
import {daysToGo, totalBacked, percentFunded} from '../../util/project_util';
import { HashLink as Link } from 'react-router-hash-link';import RewardItemContainer from '../reward/reward_container';
import ReactHtmlParser from 'react-html-parser';
import BackingFormContainer from '../backing/backing_form_container';

class ProjectShow extends React.Component{
  constructor(props){
    super(props);

    this.removeProject = this.removeProject.bind(this);
    this.rewardIndex = this.rewardIndex.bind(this);
    this.protectedButtons = this.protectedButtons.bind(this);
    this.progressBar = this.progressBar.bind(this);
  }

  componentDidMount(){
    this.props.getProject(this.props.match.params.projectId);
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(newProps){
    if (newProps.backing !== this.props.backing){
      this.props.getProject(this.props.match.params.projectId);
    }
  }

  removeProject(projectId) {
    return (e) => {
      e.preventDefault();
      this.props.removeProject(projectId)
        .then(() => this.props.history.push(`/`));
    };
  }

  rewardIndex() {
    if (this.props.project.rewards){
      return this.props.project.rewards.map((reward) => (
        <RewardItemContainer reward={reward}
                             state={this.state}
                             key={reward.id}/>
      ));
    } else {
      return "";
    }
  }

  protectedButtons(){
    const {project} = this.props;
    if (this.props.currentUser){
      if (this.props.currentUser.id === project.user_id){
        return (
          <div>
            <Link to={`/project/update/${project.id}`}>Edit Project</Link>
            <button onClick={this.removeProject(project.id)}>Delete Project</button>
          </div>
        );
      }
    }
  }

  progressBar(){
    const {project} = this.props;
    if (percentFunded(project.goal_amount, project.backings) > 100){
      return {width: '100%'};
    } else {
      return {width: `${percentFunded(project.goal_amount, project.backings)}%`};
    }
  }

  negativeBar(){
    const {project} = this.props;
    if (percentFunded(project.goal_amount, project.backings) === 0){
      return {width: '100%'};
    } else {
      return {width: `${100 - percentFunded(project.goal_amount, project.backings)}%`};
    }
  }

  render(){
    const {project, removeProject, rewards,  createBacking, match} = this.props;

    if (!project) return null;
    if (project.id !== parseInt(match.params.projectId)){
      return null;
    }
    return(
      <div className='show-container'>
        <div className='show-header'>
          <div className='project-show-header'>
            <div className= 'project-show-header-left'>
              <img src='https://res.cloudinary.com/rebekahliu/image/upload/r_0/v1506287036/missing_user_avatar_kxjowu.png' /><br />
              <span className='by'>By </span>
              <span>{project.user}</span>
            </div>
            <div className= 'project-show-header-right'>
              <h2>{project.title}</h2>
              <h3>{project.description}</h3>
            </div>
          </div>
          <div className='project-show-grid'>
            <div className='col-1-2'>
              <img src={`${project.image_url}`} alt={`${project.title}`} />
            </div>
            <div className='col-2-3'>
              <div className='col-container'>
                <div className='progress-bar-container'>
                  <div className='progress-bar' style={this.progressBar()}></div>
                  <div className='negative-bar' style={this.negativeBar()}></div>
                </div>
                <div className='project-show-sidebar'>
                  <h1>${totalBacked(project.backings)}</h1>
                  <span>pledged of ${project.goal_amount} goal</span>
                  <h2>{daysToGo(project.end_date)}</h2>
                  <span>days to go</span><br />
                  <h2>{project.backings.length}</h2>
                  <span>backers</span>
                  <Link to='#back-this-project'>Back this project</Link>
                  {this.protectedButtons()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='project-show-details'>
          <div className='project-show-about'>
            <h2>About this project</h2>
            <span>{ReactHtmlParser(project.about)}</span>
          </div>
          <div className='project-show-rewards'>
            <a id='back-this-project'></a>
            <h2>Support this project</h2>
            <BackingFormContainer project={project} />
            {this.rewardIndex()}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;
