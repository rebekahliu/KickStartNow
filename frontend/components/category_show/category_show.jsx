import React from 'react';

class CategoryShow extends React.Component {
  componentDidMount() {
    this.props.getCategory(this.props.match.params.categoryId);
  }

  rewardProjects(){
    if (this.props.category){
      return this.props.category.projects.map((project) => (
        <ProjectShowContainer project={project} />
      ));
    }
  }

  render(){
    return(
      <div>
        <h1>{this.props.category.name}</h1>
        // {rewardProjects()}
      </div>
    );
  }
}

export default CategoryShow;
