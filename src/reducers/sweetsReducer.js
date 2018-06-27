export default (state = [], action) => {
  switch(action.type) {
    case 'GET_SWEETS':
      return action.sweets;

    case 'CREATE_SWEET':
      return state.concat(action.sweet);

    case 'REMOVE_SWEET':
      return state.filter(sweet => sweet.id !== action.sweetId);

    case 'LIKE_SWEET':
      return state.map((sweet) => {
        if (sweet.id === action.sweet.id) {
          return action.sweet
        } else {
          return sweet
        }
      });


    default:
    return state;
  }
}
