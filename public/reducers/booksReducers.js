export default function bookReducer(state = {}, action){
  switch(action.type) {

    case 'GET_BOOK':
      return	{
        book: action.payload.book
      }

    default:
      return state;
  }
}