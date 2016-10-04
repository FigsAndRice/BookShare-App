/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-boolean-value */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton, Dialog, CircularProgress } from 'material-ui';
import { uploadImg } from '../../actions/ImageActions';

const imgstyle = {
  border: '0px solid',
  boxShadow: '0px 5px 15px #848484',
  height: 200,
  width: 150,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

const styles = {
  button: {
    margin: 12
  },
  ImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

const DialogStyle = {
  width: '250px'
};

const progressStyle = {
  textAlign: 'center',
  margin: 'auto',
  padding: '10px'
};

class BookPicUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imgpreURL: this.props.imgUrl,
      open: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps() {
    this.handleClose();
  }

  onInputChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imgpreURL: reader.result
      });
      this.props.uploadImg(this.state.file);
    };
    reader.readAsDataURL(file);
    this.handleOpen();
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
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
        <img style={imgstyle} src={this.state.imgpreURL} role="presentation" />
        <div className="row">
          <RaisedButton
            label="select an image"
            labelPosition="before"
            style={styles.button}
          >
            <input type="file" style={styles.ImageInput} onChange={this.onInputChange} />
          </RaisedButton>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImg: (imgfile) => { dispatch(uploadImg(imgfile)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPicUploader);
