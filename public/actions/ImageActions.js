/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-boolean-value */

import axios from 'axios';

export function imageUploaded(image) {
  return {
    type: 'UPLOADED_IMG',
    payload: { image }
  };
}

export function uploadImg(imgFile) {
  return (dispatch) => {
    const data = new FormData();
    data.append('img', imgFile);
    axios.post('/api/images', data)
      .then(res => dispatch(imageUploaded(res.data)))
      .catch();
  };
}

export function removeImg() {
  return {
    type: 'REMOVE_IMG',
    payload: {}
  };
}

export function clearImgstore() {
  return (dispatch) => {
    dispatch(removeImg());
  };
}
