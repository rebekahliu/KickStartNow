import React from 'react';
import {Link} from 'react-router-dom';

class CategoryIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getCategories();
  }

  render(){
    const {categories} = this.props;
    const allCategories = categories.map((category) =>
      <Link to={`/categories/${category.id}`}>{category.name}</Link>
    );
    return(
      <div>
        {allCategories}
      </div>
    );
  }
}

export default CategoryIndex;
