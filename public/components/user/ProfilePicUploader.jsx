import React , { Component} from 'react'
import { Link } from 'react-router'

import { TextField, RaisedButton } from 'material-ui'
import { yellow600, amber600, lightBlue900 } from 'material-ui/styles/colors'

export default class ProfilePicUploader extends Component {

  constructor(){
    super();
    this.state={
      file : '',
      imgpreURL : 'http://www.biglunchextras.com/sites/default/files/user-default.png'
    };
    this._onInputChange=this._onInputChange.bind(this);
  }

  _onInputChange(e){
   let reader = new FileReader();
   let file = e.target.files[0];

   reader.onloadend=()=>{

     this.setState({
       file,
       imgpreURL : reader.result
     });
   };
   reader.readAsDataURL(file);
  }

  render() {
    return (
      <div>
        <img style={imgstyle} src={this.state.imgpreURL} />
        <div>
          <RaisedButton
            label="Upload Image From File"
            labelPosition="before"
            style={styles.button}
          >
            <input type="file" style={styles.ImageInput} onChange={this._onInputChange} />
          </RaisedButton>
        </div>
      </div>
    );
  }

}

const imgstyle = {
  border: '0px solid',
  borderRadius: 100,
  boxShadow: '0px 5px 15px #848484',
  height: 170,
  width: 170,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const styles = {
  button: {
    margin: 12,
  },
  ImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
