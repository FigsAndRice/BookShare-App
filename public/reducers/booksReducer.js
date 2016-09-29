export default function bookReducer(state = {}, action){
  switch(action.type) {

    case 'GET_BOOK':
      return	action.payload.book;
    default:
      return state;
  }
}
