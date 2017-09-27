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
    const {createBacking, project} = this.props;
    const newBacking = {
      backing_amount: this.state.backing_amount,
      project_id: project.id
    };
    createBacking(newBacking);
  }

  render(){
    return (
      <div className='reward-item'>
        <div className='pledge-info'>
          <h2>Back this project</h2>
          <input onChange={this.updateValue('backing_amount')} placeholder='10'></input>
          <button onClick={this.handleSubmit} className='backing-submit'>Submit</button>
        </div>
      </div>
    );
  }
}

export default BackingForm;
