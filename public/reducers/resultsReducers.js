export default function resultReducer(state = [], action){
  switch(action.type) {

    case 'GET_RESULTS':
      return	{
        state: action.payload.results
      }

    default:
      return state;
  }
}