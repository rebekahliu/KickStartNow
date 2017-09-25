import React from 'react';
import ProjectIndexItem from '../project_index/project_index_item';

class CategoryShow extends React.Component {
  componentDidMount() {
    this.props.getProjects();
    this.props.getCategory(this.props.match.params.categoryId);
  }

  rewardProjects(){
    if (this.props.category.name){
      return this.props.category.projects.map((id) => (
        <ProjectIndexItem project={this.props.projects[id]} />
      ));
    }
  }

  render(){
    const {name} = this.props.category;
    return(
      <div>
        <h1>{name ? name : ""}</h1>
        {this.rewardProjects()}
      </div>
    );
  }
}

export default CategoryShow;
