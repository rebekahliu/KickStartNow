import React from 'react';
import {Link} from 'react-router-dom';
import {daysToGo} from '../../util/project_util';

class ProjectIndexItem extends React.Component{
  render(){
    const {project} = this.props;
    return(
      <div className='index-item-continer'>
        <li>
          <Link to={`/projects/${project.id}`}>{project.title}</Link><br />
          {project.description}<br />
          {daysToGo(project.end_date)} days to go<br />
          {project.user}<br />
          %funded
        </li>
      </div>
    );
  }
}

export default ProjectIndexItem;
