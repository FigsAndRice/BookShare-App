export default function userReducer(state = {}, action) {
  switch (action.type) {
  case 'RECEIVE_USER':
    return action.payload.user;
  case 'REMOVE_USER':
    return null;
  default:
    return state;
  }
}
