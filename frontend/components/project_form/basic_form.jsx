import React from 'react';

class BasicForm extends React.Component{
  render(){
    const {fieldVals, saveValues} = this.props;
    return(
      <h1>Basic Form</h1>
    );
  }
}

export default BasicForm;
