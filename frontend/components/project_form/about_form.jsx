import React from 'react';
import ReactQuill from 'react-quill';

class AboutForm extends React.Component{
  render(){
    const {fieldVals, saveAboutValue, handleSubmit} = this.props;
    const {about} = this.props.fieldVals;
    return(
      <div className='project-new-partial'>
        <h2>Tell us about your project.</h2>
        <h4>Get specific about why people should be excited about your project.</h4>
        <form>
          <label>Project Description</label><br />
          <ReactQuill value={about}
                      onChange={saveAboutValue}
                      placeholder='Tell people about your project here'/>
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default AboutForm;
