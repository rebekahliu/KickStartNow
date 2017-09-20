import React from 'react';

class ProjectShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getProject();
  }

  render(){
    return(
      <h1>Project Show</h1>
    );
  }
}

export default ProjectShow;
