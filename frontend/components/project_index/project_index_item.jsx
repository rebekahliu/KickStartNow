import React from 'react';
import {Link} from 'react-router-dom';
import {daysToGo} from '../../util/project_util';

class ProjectIndexItem extends React.Component{
  render(){
    const {project} = this.props;
    return(
      <div className='index-item-container'>
        <Link to={`/projects/${project.id}`} className='index-item-image-link'>
          //img
        </ Link>
        <div className='index-item-details'>
          <div className='index-item-details-top'>
            <div className='index-item-category'>Category</div>
            <div className='index-item-title'>
              <Link to={`/projects/${project.id}`}>{project.title}</Link>
              - {project.description}<br />
              by {project.user}<br />
            </div>
          </div>
          <div className='index-item-details-bottom'>
            <div className='index-item-details-bottom-info'>
              <li>
              {daysToGo(project.end_date)} days to go<br />
              %funded
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectIndexItem;
