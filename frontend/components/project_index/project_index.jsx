import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getProjects();
  }

  render(){
    const projectIndexItems = this.props.projects.map((project) => (
      <ProjectIndexItem project={project} key={project.id}/>
    ));
    return(
      <div className='project-index-container'>
        {projectIndexItems}
      </div>
    );
  }
}

export default ProjectIndex;
