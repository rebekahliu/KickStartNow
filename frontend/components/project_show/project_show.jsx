import React from 'react';
import {daysToGo} from '../../util/project_util';
import {Link} from 'react-router-dom';
import RewardItem from '../reward/reward_show';

class ProjectShow extends React.Component{
  constructor(props){
    super(props);

    this.removeProject = this.removeProject.bind(this);
    this.rewardIndex = this.rewardIndex.bind(this);
  }

  componentWillMount() {
    this.props.getProject(this.props.match.params.projectId)
      .then(() => this.forceUpdate());
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
        <RewardItem reward={reward} />
      ));
    } else {
      return "";
    }
  }

  render(){
    const {project, removeProject, rewards} = this.props;
    if (!project) return null;

    return(
      <div className='show-container'>
        <div className='show-header'>
          <div className='project-show-header'>
            <div className= 'project-show-header-left'>
              <img src='http://res.cloudinary.com/rebekahliu/image/upload/r_0/v1506287036/missing_user_avatar_kxjowu.png' /><br />
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
                <div type='progress'>
                </div>
                <div>
                  <span>pledged of ${project.goal_amount} goal</span><br />
                  <span>{daysToGo(project.end_date)}</span><br />
                  <span>days to go</span><br />
                  <Link to='/project/update'>Edit Project</Link><br />
                  <button onClick={this.removeProject(project.id)}>Delete Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='project-show-details'>
          <div className='project-show-about'>
            <h2>About this project</h2>
            <p>{project.about}</p>
          </div>
          <div className='project-show-rewards'>
            <h2>Support this project</h2>
            {this.rewardIndex()}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;
