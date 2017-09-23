import React from 'react';
import {daysToGo} from '../../util/project_util';
import {Link} from 'react-router-dom';

class ProjectShow extends React.Component{
  constructor(props){
    super(props);

    this.removeProject = this.removeProject.bind(this);
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

  render(){
    const {project, removeProject} = this.props;
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
              <Link to='/project/update'>Edit Project</Link>
              <button onClick={this.removeProject(project.id)}>Delete Project</button>
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
