import React from 'react';
import {Link} from 'react-router-dom';
import {daysToGo, totalBacked, percentFunded} from '../../util/project_util';

class ProjectIndexItem extends React.Component{
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
    const {project} = this.props;
    return(
      <div className='index-item-container'>
        <Link to={`/projects/${project.id}`} className='index-item-image-link'>
          <img src={`${project.image_url}`} alt={`${project.title}`} />
        </ Link>
        <div className='index-item-details'>
          <div className='index-item-category'>{project.category}</div>
          <div className='index-item-title'>
            <Link to={`/projects/${project.id}`}>{project.title}:</Link>
            <span id='clampjs'> {project.description}</span><br />
            <span>
              <img src='https://res.cloudinary.com/rebekahliu/image/upload/r_0/v1506287036/missing_user_avatar_kxjowu.png' /> by
            </span>
            <span className='index-item-user'> {project.user}</span>
          </div>
          <div className='index-item-details-bottom'>
            <div className='index-item-details-bottom-info'>
              <div className='progress-bar-container'>
                <div className='progress-bar' style={this.progressBar()}></div>
                <div className='negative-bar' style={this.negativeBar()}></div>
              </div>
              <span className='index-item-bold'>${totalBacked(project.backings)}</span>
              <span> pledged</span><br />
              <span className='index-item-bold'>{percentFunded(project.goal_amount, project.backings)}%</span>
              <span> funded</span><br />
              <span className='index-item-bold'>{daysToGo(project.end_date)}</span>
              <span> days to go</span><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectIndexItem;


// <script>
//   var description = document.getElementById("clampjs");
//   $clamp(description, {clamp: 3});
// </script>
