export default function bookReducer(state = [], action){
  switch(action.type) {

    case 'GET_RESULTS':
      return	{
        results: action.payload.results
      }

    default:
      return state;
  }
}