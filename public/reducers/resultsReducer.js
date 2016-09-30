export default function locationReducer(state = []	, action){
 	switch(action.type) {
  	
    case 'GET_RESULTS':
 			console.log('at the reducers ', action)
      return Object.assign({}, {results : action.payload.results});

    default:
      return state;
  }
}