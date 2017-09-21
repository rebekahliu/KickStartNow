import React from 'react';
import Link from 'react-router-dom';

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
      <ul>
        <Link></Link>
        <li>{project.description}</li>
        <li>{this.daysToGo()} days to go</li>
        <li>{project.user}</li>
        <li>%funded</li>
      </ul>
    );
  }
}

export default ProjectIndexItem;
