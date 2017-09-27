import React from 'react';
import ProjectIndexItem from '../project_index/project_index_item';
import ProjectIndexContainer from '../project_index/project_index_container';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state={
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchProjects = this.searchProjects.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({query: e.target.value});
    this.props.getSearchResults(e.target.value);
  }

  searchProjects(){
    Object.values(this.props.projects).map((project) => (
      <ProjectIndexItem project={project} key={project.id}/>
    ));
  }

  render(){
    return(
      <div className='header-search'>
        <div>
          <i className="fa fa-search"></i>
          <input placeholder='Search' type='text' value={this.state.query} onChange={this.handleChange}></input>
        </div>
        <div>
          <Link to='/'>
            <i className="fa fa-times"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Search;
