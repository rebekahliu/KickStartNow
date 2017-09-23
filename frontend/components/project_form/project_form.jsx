import React from 'react';
import {Redirect} from 'react-router-dom';
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
      category_id: 0,
      end_date: "",
      goal_amount: 0,
      user_id: "",
      image_url: ""
    };

    this.changeForm = this.changeForm.bind(this);
    this.saveValues = this.saveValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveImageURL = this.saveImageURL.bind(this);
  }

  componentWillMount(){
    if (this.props.formType === 'update'){
      this.setState(this.props.project);
    }
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

  saveImageURL(imageURL){
    console.log('saved image url');
    this.setState({image_url: imageURL});
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    const project = Object.assign({}, this.state);
    delete project['step'];
    project['category_id'] = parseInt(project['category_id']);
    project['goal_amount'] = parseInt(project['goal_amount']);
    project['user_id'] = this.props.currentUser.id;
    this.props.processForm(project)
      .then(() => this.props.history.push(`/projects/${this.props.project.id}`));
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
                          saveValues={this.saveValues}
                          saveImageURL={this.saveImageURL}/>;
      case 2:
        return <RewardsForm fieldVals={this.state}
                            saveValues={this.saveValues}/>;
      case 3:
        return <AboutForm fieldVals={this.state}
                          saveValues={this.saveValues}/>;
    }
  }

  render(){
    return(
      <div className='project-new-page'>
        <div className='project-new-wrapper'>
          {this.navBar()}
          {this.partialForm()}
        </div>
      </div>
    );
  }
}

export default ProjectForm;
