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
      <div className='category-index-item'>
        <Link to={`/categories/${category.id}`}>{category.name}</Link>
        <span>{category.projects.length}</span>
        <br />
      </div>
    );
    return(
      <div className='category-index-container'>
        <div className='category-index-header'>
          <h1>Categories</h1>
          <Link to=''>
            <i className="fa fa-times"></i>
          </Link>
        </div>
        <div className='category-index'>
          {allCategories}
        </div>
      </div>
    );
  }
}

export default CategoryIndex;
