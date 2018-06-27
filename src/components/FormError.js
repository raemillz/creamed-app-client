import React from 'react';
import ErrorPageImage from './ErrorPageImage';


const FormError = () => {
  const style = { color: 'red' }
  return (
    <p style={style}>Error: Please fill out all inputs</p>
  )
}

export default FormError;
