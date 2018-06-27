import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import sweets from './reducers/sweetsReducer';
import sweetFormData from './reducers/sweetFormData';
import errors from './reducers/errorsReducer';


const reducers = combineReducers({
  sweets,
  sweetFormData,
  errors
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
