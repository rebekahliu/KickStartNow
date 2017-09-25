import React from 'react';

class CategoryShow extends React.Component {
  componentWillMount() {
    this.props.getCategory(this.props.match.params.categoryId);
  }

  render(){
    return(
      <h1>{this.props.category.name}</h1>
    );
  }
}

export default CategoryShow;
