import { browserHistory } from 'react-router';
import axios from 'axios';

export function uploadImg(imgFile) {
  return dispatch => {
    let data = new FormData();
    data.append('img',imgFile)
    axios.post('/api/images',data)
      .then(res => dispatch(imageUploaded(res.data)))
      .catch(console.error)
  }
}

export function clearImgstore(){
  return dispatch => {
    dispatch(removeImg());
  }
}

export function imageUploaded(image) {
	return {
		type: 'UPLOADED_IMG',
		payload: { image }
	}
}


export function removeImg() {
  return {
    type: 'REMOVE_IMG',
    payload: {}
  }
}
