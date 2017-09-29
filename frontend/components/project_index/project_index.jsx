import React from 'react';
import ProjectIndexItem from './project_index_item';


class ProjectIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getProjects();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.path !== nextProps.match.path){
      this.props.getProjects();
    }
  }

  render(){
    const projectIndexItems = this.props.projects.map((project) => (
      <ProjectIndexItem project={project} key={project.id}/>
    ));
    return(
      <div>
        <div className='project-index-container'>
          {projectIndexItems}
        </div>
      </div>
    );
  }
}

export default ProjectIndex;
