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
    const {fieldVals, saveValues} = this.props;
    const {title, description, category_id, end_date, goal_amount, image_url} = this.props.fieldVals;
    return(
      <div className='project-new-partial'>
        <h2>Let’s get started.</h2>
        <h4>Make a great first impression with your project’s title and image.</h4>
          <form>

            <div>
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

            <label>Category</label><br />
            <input type="number" onChange={saveValues('category_id')} value={category_id}></input>
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
