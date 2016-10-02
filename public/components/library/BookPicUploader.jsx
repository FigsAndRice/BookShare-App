import React , { Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { uploadImg } from '../../actions/ImageActions'
import { TextField, RaisedButton } from 'material-ui'
import { yellow600, amber600, lightBlue900 } from 'material-ui/styles/colors'

class BookPicUploader extends Component {

  constructor(props){
    super(props);
    this.state={
      file : '',
      imgpreURL : 'http://1615.info/images/red-book.jpg'
    };
    this._onInputChange=this._onInputChange.bind(this);
    this._upload=this._upload.bind(this);
  }

  _upload(){
    this.props.uploadImg(this.state.file);
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
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImg: (imgfile) => {dispatch(uploadImg(imgfile))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPicUploader);

const imgstyle = {
  border: '0px solid',
  // borderRadius: 100,
  boxShadow: '0px 5px 15px #848484',
  height: 200,
  width: 150,
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
