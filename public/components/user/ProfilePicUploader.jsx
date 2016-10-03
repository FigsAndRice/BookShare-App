import React , { Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { uploadImg } from '../../actions/ImageActions'
import { TextField, RaisedButton, FlatButton, CircularProgress, Dialog } from 'material-ui'
import { yellow600, amber600, lightBlue900 } from 'material-ui/styles/colors'
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import CircularProgress from 'material-ui/CircularProgress';



class ProfilePicUploader extends Component {

  constructor(props){
    super(props);
    this.state={
      file : '',
      imgpreURL : this.props.imgUrl,
      open : false
    };
    this._onInputChange=this._onInputChange.bind(this);
    this._upload=this._upload.bind(this);
    this._handleOpen=this._handleOpen.bind(this);
    this._handleClose=this._handleClose.bind(this);
  }

  _handleOpen(){
    this.setState({open : true})
  };

  _handleClose(){
    this.setState({open : false})
  };

  // _upload(){
  //   this.props.uploadImg(this.state.file);
  //   this._handleOpen();
  // }

  _onInputChange(e){
   let reader = new FileReader();
   let file = e.target.files[0];

   reader.onloadend=()=>{

     this.setState({
       file,
       imgpreURL : reader.result
     });
     this.props.uploadImg(this.state.file);
   };
   reader.readAsDataURL(file);
   this._handleOpen();
  }

  componentWillReceiveProps(){
    // console.log("after receiving props ",this.props.image);
    this._handleClose();
  }
  // {
  //
  //   console.log("Uploadedimage",this.props.image);
  // }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this._handleClose}
      />
    ];
    // console.log("Uploadedimage",this.props.image);
    let progressPopup = hidePopup;
    // if (this.props.image !== null){
    //   progressPopup = showPopup;
    // }
    return (
      <div>
          <Dialog
          modal={false}
          open={this.state.open}
          contentStyle={DialogStyle}
          >
          <div style={progressStyle}>
            <h4>UPLOADING IMAGE...</h4>
            <CircularProgress size={2} />
          </div>
          </Dialog>
        {/* <div style={progressPopup}>
          <div style={DialogStyle}>
            <h4>Uploading Image.....</h4>
            <div style={progressStyle}>
              <CircularProgress size={2} />
            </div>
          </div>
        </div> */}
        <img style={imgstyle} src={this.state.imgpreURL} />
            {/* <RaisedButton label="Dialog" onTouchTap={this._handleOpen} /> */}
          <div className="row">
            <RaisedButton
              label="select an image"
              labelPosition="before"
              style={styles.button}
            >
              <input type="file" style={styles.ImageInput} onChange={this._onInputChange} />
            </RaisedButton>
            {/* <RaisedButton
              label="upload image"
              labelPosition="before"
              style={styles.button}
              onClick={this._upload}
            >
            </RaisedButton> */}
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
  width: '250px',
  // margin : 'auto',
  // marginTop : '25%',
  // backgroundColor : 'white',
  // padding : '20px',

};

const progressStyle = {
  textAlign : 'center',
  margin : 'auto',
  padding : '10px',
}

const showPopup = {
  display : 'block',
  position : 'fixed',
  padding: 0,
  margin: 0,
  top : 0,
  left : 0,
  zIndex : '100',
  backgroundColor : 'rgba(0, 0, 0, 0.45)',
  height : '100%',
  width : '100%'
}

const hidePopup = {
  display : 'none',
};
