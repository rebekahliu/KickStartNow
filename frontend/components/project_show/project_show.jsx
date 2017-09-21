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
      <ul>
        <li>{project.title}</li>
        <li>{project.user}</li>
        <li>{project.description}</li>
        <li>{project.goal_amount}</li>
        <li>{daysToGo(project.end_date)} days to go</li>
      </ul>
    );
  }
}

export default ProjectShow;
