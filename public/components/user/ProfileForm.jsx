import React , { Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { TextField, RaisedButton } from 'material-ui'
import {yellow600, amber600, lightBlue900} from 'material-ui/styles/colors';

import { updateUser } from '../../actions/UserActions'
import { uploadImg } from '../../actions/ImageActions'

import ProfilePicUploader from './ProfilePicUploader.jsx'

class ProfileForm extends Component {
  constructor(props){
    super(props);
    // let { url } = this.props.image;
    let { username , firstName , lastName , email , phone} = this.props.user;
    this.state = {
      file : '',
      imgpreURL : 'http://www.biglunchextras.com/sites/default/files/user-default.png',
      user : {
        username,
        firstName,
        lastName,
        email,
        phone,
      }
    }
    this._onInputChange = this._onInputChange.bind(this);
    this._updateProfile = this._updateProfile.bind(this);
    this._onImageChange = this._onImageChange.bind(this);
    this._uploadImage = this._uploadImage.bind(this);
  }
  _onInputChange(e){
   let key = e.target.dataset.statekey;
   let value = e.target.value;

   this.setState({
       [key]: value
   });
  }
  _onImageChange(e){
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
  _uploadImage(){
    this.props.uploadImg(this.state.file);
    this.setState({ user : { picture : this.props.image.url }});
    console.log('uploadImg',this.state.user);
  }
  _updateProfile(){
    let { _id } = this.props.user;
    this.props.updateUser(_id,this.state.user);
  }
  render(){
    let { username , firstName , lastName , email , phone } = this.state.user;
    // let picture = this.props.image.url;
    console.log("picture",this.props.image.url);
    console.log("form state render",this.state.user);
    return (
      <div className="container text-center">
        <div className="col-md-6">
          <img style={imgstyle} src={this.state.imgpreURL} />
          <div>
            <RaisedButton
              label="select an image"
              labelPosition="before"
              style={styles.button}
            >
              <input type="file" style={styles.ImageInput} onChange={this._onImageChange} />
            </RaisedButton>
            <RaisedButton
              label="upload image"
              labelPosition="before"
              style={styles.button}
              onClick={this._uploadImage}
            >
            </RaisedButton>
          </div>
          {/* <ProfilePicUploader uploadImg={this.props.uploadImg}/> */}
        </div>
        <div className="col-md-6">
          <form style={editform}>
            <div>
              {/* <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="picture"
                defaultValue={picture}
                floatingLabelText="Img URL"
              /><br /> */}
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="username"
                defaultValue={username}
                floatingLabelText="User Name"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="firstName"
                defaultValue={firstName}
                floatingLabelText="First Name"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="lastName"
                defaultValue={lastName}
                floatingLabelText="Last Name"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="email"
                defaultValue={email}
                floatingLabelText="Email"
              /><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="phone"
                defaultValue={phone}
                floatingLabelText="Phone"
              />
            </div>
            <RaisedButton backgroundColor={amber600} label="Update" style={style1} onClick={this._updateProfile}/>
            <Link to="/"><RaisedButton backgroundColor={yellow600} label="cancel" style={style1}/></Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user,
    image : state.image
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id,state) => {dispatch(updateUser(id,state))},
    uploadImg: (imgfile) => {dispatch(uploadImg(imgfile))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);

const editform = {
  margin : 'auto'
};

const style1 = {
  margin: 12,
};

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
