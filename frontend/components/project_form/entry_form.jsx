import React from 'react';

class EntryForm extends React.Component{
  render(){
    const {saveValues} = this.props;
    const {image_url, title, description, category, end_date, funding_goal} = this.props.fieldVals;
    return(
      <div>
        <h1>Get Started</h1>
          <form>
            <label>Category</label>
            <input onChange={saveValues('category')}></input>

          </form>
      </div>
    );
  }
}

export default EntryForm;
