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
    console.log('render index');
    const projectIndexItems = this.props.projects.map((project) => (
      <ProjectIndexItem project={project} key={project.id}/>
    ));
    return(
      <div>
        <ul>
          {projectIndexItems}
        </ul>
      </div>
    );
  }
}

export default ProjectIndex;
