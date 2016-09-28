export default function locationReducer(state = {}, action){
  switch(action.type) {

    case 'SEARCH_RESULTS':
      return Object.assign({}, state, {
        address: action.payload.mapCoords
      })

    default:
      return state;
  }
}