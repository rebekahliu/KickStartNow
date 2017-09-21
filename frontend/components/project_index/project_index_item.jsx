import React from 'react';
import {Link} from 'react-router-dom';

class ProjectIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.daysToGo = this.daysToGo.bind(this);
    this.daydiff = this.daydiff.bind(this);
  }

  daysToGo(){
    return (this.daydiff(new Date(), new Date(this.props.project.end_date)));
  }

  daydiff(date1, date2) {
    return Math.round((date2-date1)/(1000*60*60*24));
  }

  render(){
    const {project} = this.props;
    return(
      <li>
        <Link to={`/projects/${project.id}`}>{project.title}</Link><br />
        {project.description}<br />
        {this.daysToGo()} days to go<br />
        {project.user}<br />
        %funded
      </li>
    );
  }
}

export default ProjectIndexItem;
