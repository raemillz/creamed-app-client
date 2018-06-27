export const updateSweetFormData = sweetFormData => {
  return {
    type: 'UPDATED_SWEET',
    sweetFormData
  }
}
export const resetSweetForm = () => {
  return {
    type: 'RESET_SWEET_FORM'
  }
}
