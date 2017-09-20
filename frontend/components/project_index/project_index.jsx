import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getProjects();
  }

  render(){
    console.log(this.props.projects);
    const projectIndexItems = this.props.projects.map((project) => (
      <ProjectIndexItem project={project} />
    ));
    return(
      <div>
        {projectIndexItems}
      </div>
    );
  }
}

export default ProjectIndex;
