import React from 'react';
import {daysToGo} from '../../util/project_util';

class ProjectShow extends React.Component{
  componentWillMount() {
    this.props.getProject(this.props.match.params.projectId)
      .then(() => this.forceUpdate());
  }

  render(){
    const {project} = this.props;
    if (!project) return null;

    return(
      <div className='show-container'>
        <div className='project-show-header'>
          <ul className= 'project-show-header-left'>
            <li>{project.user}</li>
          </ul>
          <ul className= 'project-show-header-right'>
            <li>{project.title}</li>
            <li>{project.description}</li>
          </ul>
        </div>
        <div className='project-show-display'>
          <div className='project-show-image'>
            <img src={`${project.image_url}`} alt={`${project.title}`} />
          </div>
          <div className='project-show-side'>
            <div type='progress'>

            </div>
            <ul>
              <li>pledged of ${project.goal_amount} goal</li>
              <li>{daysToGo(project.end_date)}</li>
              <li>days to go</li>
            </ul>
          </div>
        </div>
        <div className='project-show-details'>
          <div className='project-show-about'>
            {project.about}
          </div>
          <div className='project-show-rewards'>
            <ul>
              <li>Rewards</li>
              <li>Rewards</li>
              <li>Rewards</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;
