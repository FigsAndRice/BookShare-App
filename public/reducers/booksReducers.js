export default function bookReducer(state = {}, action){
  switch(action.type) {

    case 'GET_BOOK':
    	console.log('at the reducer ', action.payload.book)
      return	{
        book: action.payload.book
      }

    default:
      return state;
  }
}