import React from 'react';

class BackingForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      backing_amount: "",
      project_id: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(){
    const {createBacking, project, currentUser} = this.props;
    if (currentUser) {
      const newBacking = {
        backing_amount: this.state.backing_amount,
        project_id: project.id
      };
      createBacking(newBacking);
      window.scrollTo(0, 0);
      this.setState({
        backing_amount: "",
        project_id: ""
      });
    } else {
      alert('Please login!');
    }
  }

  render(){
    return (
      <div className='reward-item'>
        <div className='pledge-info'>
          <h2>Back this project</h2>
          <input onChange={this.updateValue('backing_amount')} placeholder='enter amount' type='number' value={this.state.backing_amount}></input>
          <button onClick={this.handleSubmit} className='backing-submit'>Submit</button>
        </div>
      </div>
    );
  }
}

export default BackingForm;
