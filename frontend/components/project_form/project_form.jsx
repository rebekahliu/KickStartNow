import React from 'react';
import BasicForm from './basic_form';
import RewardsForm from './rewards_form';
import AboutForm from './about_form';
import EntryForm from './entry_form';

class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      step: 0,
      title: "hello",
      description: "",
      about: "",
      category: "art",
      end_date: "",
      goal_amount: ""
    };

    this.changeForm = this.changeForm.bind(this);
    this.saveValues = this.saveValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeForm(type){
    return (e) => {
      e.preventDefault();
      if (type === 'basic'){
        this.setState({step: 1});
      } else if (type === 'rewards'){
        this.setState({step: 2});
      } else {
        this.setState({step: 3});
      }
    };
  }

  saveValues(type){
    return (e) => {
      e.preventDefault();
      this.setState({[type]: e.target.value});
    };
  }


  handleSubmit(e){
    e.preventDefault();
    const project = Object.assign({}, this.state);
    const _defaultForm = {
      step: 0,
      title: "",
      description: ""
    };
    this.state = _defaultForm;
    this.props.createProject(project);
  }

  navBar(){
    return (
      <div className='project-new-nav'>
        <span className='button'>
          <i className="fa fa-check-circle"></i>
          <button onClick={this.changeForm('basic')}>Basics</button>
        </span>
        <span className='button'>
          <i className="fa fa-check-circle"></i>
          <button onClick={this.changeForm('rewards')}>Rewards</button>
        </span>
        <span className='button'>
          <i className="fa fa-check-circle"></i>
          <button onClick={this.changeForm('about')}>Story</button>
        </span>
        <span className='button'>
          <i className="fa fa-check-circle"></i>
          <button onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  }

  partialForm(){
    switch(this.state.step){
      case 0:
        return <EntryForm fieldVals={this.state}
                        saveValues={this.saveValues}
                        changeForm={this.changeForm}/>;
      case 1:
        return <BasicForm fieldVals={this.state}
                        saveValues={this.saveValues}/>;
      case 2:
        return <RewardsForm fieldVals={this.state}
                          saveValues={this.saveValues}/>;
      case 3:
        return <AboutForm fieldVals={this.state}
                        saveValues={this.saveValues}/>;
    }
  }

  render(){
    console.log(this.state);
    return(
      <div className='project-new-page'>
        {this.navBar()}
        {this.partialForm()}
      </div>
    );
  }
}

export default ProjectForm;
