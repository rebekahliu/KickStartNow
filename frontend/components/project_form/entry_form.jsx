import React from 'react';

class EntryForm extends React.Component{
  render(){
    const {saveValues, changeForm} = this.props;
    const {image_url, title, description, category, end_date, funding_goal} = this.props.fieldVals;
    return(
      <div className='project-new-partial'>
        <h2>Get Started</h2>
        <form>
          <label>Category</label><br />
          <input onChange={saveValues('category')} value={category}></input>
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
