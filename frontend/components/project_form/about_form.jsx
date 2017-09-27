import React from 'react';
import ReactQuill from 'react-quill';

// import 'react-quill/dist/quill.snow.css';

class AboutForm extends React.Component{
  render(){
    const {fieldVals, saveAboutValue} = this.props;
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
      </div>
    );
  }
}

export default AboutForm;
//
// const modules = {
//   toolbar: [
//     ['bold', 'italic', 'underline', 'strike'],
//     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//   ]
// }
