const initialState = {
  name: '',
  ingredients: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_SWEET':
      return action.sweetFormData

    case 'RESET_SWEET_FORM':
      return initialState;

      default:
        return state;
  }
}
