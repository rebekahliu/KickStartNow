import React from 'react';

class AboutForm extends React.Component{
  render(){
    const {fieldVals, saveValues} = this.props;
    const {about} = this.props.fieldVals;
    return(
      <div className='project-new-partial'>
        <h2>Tell us about your project.</h2>
        <h4>Get specific about why people should be excited about your project.</h4>
        <form>
          <label>Project Description</label><br />
          <input type='text' onChange={saveValues('about')} value={about}></input>
        </form>
      </div>
    );
  }
}

export default AboutForm;
