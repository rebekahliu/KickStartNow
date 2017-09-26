import React from 'react';
import ProjectIndexItem from '../project_index/project_index_item';

class CategoryShow extends React.Component {
  componentDidMount() {
    this.props.getProjects();
    this.props.getCategory(this.props.match.params.categoryId);
  }

  componentWillUnmount(){
    this.props.resetCategory();
  }

  rewardProjects(){
    if (this.props.category.name){
      return this.props.category.projects.map((id) => (
        <ProjectIndexItem project={this.props.projects[id]} key={id} />
      ));
    }
  }

  render(){
    const {name} = this.props.category;
    return(
      <div className='category-show'>
        <div className='category-show-header'>
          <span>{name ? name : ""} projects</span>
        </div>
        <div className='project-index-container'>
          {this.rewardProjects()}
        </div>
      </div>
    );
  }
}

export default CategoryShow;
