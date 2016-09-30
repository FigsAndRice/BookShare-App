export default function images(state={},action) {
  switch(action.type) {
    case 'UPLOADED_IMG':
      return action.payload.img;
    default:
      return state;
  }
}
