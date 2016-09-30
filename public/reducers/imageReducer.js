export default function images(state={},action) {
  switch(action.type) {
    case 'UPLOADED_IMG':
      return action.payload.image;
    case 'REMOVE_IMG':
      return null;
    default:
      return state;
  }
}
