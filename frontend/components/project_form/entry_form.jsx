import React from 'react';

class EntryForm extends React.Component{

  render(){
    const {saveValues, changeForm} = this.props;
    const {image_url, title, description, category_id, end_date, funding_goal} = this.props.fieldVals;
    return(
      <div className='project-new-partial'>
        <h2>Get Started</h2>
        <form>
          <label>Category</label><br />
          <select onChange={saveValues('category_id')} defaultValue='0' value={category_id}>
            <option disabled value='0'>--select a category--</option>
            <option value='1'>Art</option>
            <option value='2'>Comic</option>
            <option value='3'>Craft</option>
            <option value='4'>Food</option>
            <option value='5'>Fashion</option>
            <option value='6'>Film & Video</option>
            <option value='7'>Game</option>
            <option value='8'>Photography</option>
            <option value='9'>Technology</option>
          </select>
          <br />
          <label>Title</label><br />
          <input onChange={saveValues('title')} value={title}></input>
          <br />
          <button onClick={changeForm('basic')}>Save and Continue</button>
        </form>
      </div>
    );
  }
}

export default EntryForm;


// <input onChange={saveValues('category_id')} value={category_id}></input></select>
