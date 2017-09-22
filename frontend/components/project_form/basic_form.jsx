import React from 'react';

class BasicForm extends React.Component{
  render(){
    const {fieldVals, saveValues} = this.props;
    const {title, description, category, end_date, goal_amount} = this.props.fieldVals;
    return(
      <div className='project-new-partial'>
        <h2>Let’s get started.</h2>
        <h4>Make a great first impression with your project’s title and image.</h4>
          <form>
            <label>Category</label><br />
            <input type="number" onChange={saveValues('category')} value={category}></input>
            <br />
            <label>Title</label><br />
            <input onChange={saveValues('title')} value={title}></input>
            <br />
            <label>Description</label><br />
            <input onChange={saveValues('description')} value={description}></input>
            <br />
            <label>Funding Duration</label><br />
            <input type='date' onChange={saveValues('end_date')} value={end_date}></input>
            <br />
            <label>Goal Amount</label><br />
            <input type="number" onChange={saveValues('goal_amount')} value={goal_amount}></input>
          </form>
      </div>
    );
  }
}

export default BasicForm;
