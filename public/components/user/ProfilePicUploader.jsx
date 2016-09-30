import React , { Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { uploadImg } from '../../actions/ImageActions'
import { TextField, RaisedButton, Dialog, FlatButton, CircularProgress } from 'material-ui'
import { yellow600, amber600, lightBlue900 } from 'material-ui/styles/colors'
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import CircularProgress from 'material-ui/CircularProgress';



class ProfilePicUploader extends Component {

  constructor(props){
    super(props);
    this.state={
      file : '',
      imgpreURL : 'http://www.biglunchextras.com/sites/default/files/user-default.png',
      open: false,
    };
    this._onInputChange=this._onInputChange.bind(this);
    this._upload=this._upload.bind(this);
    this._handleOpen=this._handleOpen.bind(this);
    this._handleClose=this._handleClose.bind(this);
  }

  _handleOpen(){
    this.setState({open: true});
  };

  _handleClose(){
    this.setState({open: false});
  };

  _upload(){
    this.props.uploadImg(this.state.file);
    this.setState({open : true});
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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this._handleClose}
      />
    ];
    console.log("Uploadedimage",this.props.image);
    return (
      <div>
        <img style={imgstyle} src={this.state.imgpreURL} />
        <div>
          <RaisedButton label="Dialog" onTouchTap={this._handleOpen} />
           <Dialog
             title="Uploading Image..."
             actions={actions}
             modal={false}
             open={this.state.open}
             contentStyle={DialogStyle}
             onRequestClose={this.handleClose}
           >
          <div style={progressStyle}>
              <CircularProgress size={2} />
          </div>
           </Dialog>
          <RaisedButton
            label="select an image"
            labelPosition="before"
            style={styles.button}
          >
            <input type="file" style={styles.ImageInput} onChange={this._onInputChange} />
          </RaisedButton>
          <RaisedButton
            label="upload image"
            labelPosition="before"
            style={styles.button}
            onClick={this._upload}
          >
          </RaisedButton>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    image : state.image
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImg: (imgfile) => {dispatch(uploadImg(imgfile))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicUploader);

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

const DialogStyle = {
  width: '25%',
  // maxWidth: '100px',
};

const progressStyle = {
  margin : 'auto',
  padding : '10px',
}
