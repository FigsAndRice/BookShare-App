export default function showFavReducer(state = false, action) {
  switch (action.type) {
  case 'SHOW_FAV':
    return action.payload;
  default:
    return state;
  }
}
