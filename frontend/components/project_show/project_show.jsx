import React from 'react';

class ProjectShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.getProject(this.props.match.params.projectId);
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
        <li>{project.title}</li>
        <li>{project.user}</li>
        <li>{project.description}</li>
        <li>{project.goal_amount}</li>
        <li>{this.daysToGo()} days to go</li>
      </ul>
    );
  }
}

export default ProjectShow;
