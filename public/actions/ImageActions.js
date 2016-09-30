import { browserHistory } from 'react-router';
import axios from 'axios';

export function uploadImg(imgFile) {
  return dispatch => {
    let data = new FormData();
    data.append('img',imgFile)
    console.log("from image action",data);
    axios.post('/api/images',data)
      .then(res => res.data)
      .catch(console.error)
  }
}
