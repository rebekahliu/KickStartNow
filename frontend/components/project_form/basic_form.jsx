import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'Kickstartnow';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/rebekahliu/image/upload';

class BasicForm extends React.Component{
  constructor(props){
    super(props);

    this.state = { uploadedFile:'' };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.props.saveImageURL(response.body.secure_url);
        }
      }
    );
  }

  render(){
    const {fieldVals, saveValues, changeForm} = this.props;
    const {title, description, category_id, end_date, goal_amount, image_url} = this.props.fieldVals;
    return(
      <div className='project-new-partial'>
        <h2>Let’s get started.</h2>
        <h4>Make a great first impression with your project’s title and image.</h4>
          <form>

            <div>

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

            <div className="image-upload">
              <Dropzone
                className='dropzone'
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop}>
                Drop an image or click to select a file to upload.
              </Dropzone>
            </div>

            <div className='image-show'>
              {image_url === '' ? null :
                <div>
                  <p>{this.state.uploadedFile.name}</p>
                  <img src={image_url} />
                </div>}
              </div>
            </div>

            <label>Short Blurb</label><br />
            <input onChange={saveValues('description')} value={description}></input>
            <br />

            <label>Funding Duration</label><br />
            <input type='date' onChange={saveValues('end_date')} value={end_date}></input>
            <br />

            <label>Goal Amount</label><br />
            <input type="number" onChange={saveValues('goal_amount')} value={goal_amount}></input><br />

            <button onClick={changeForm('rewards')}>Save and Continue</button>
          </form>
      </div>
    );
  }
}

export default BasicForm;
