import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import errorsReducer from './reducers/errorsReducer'
import sweetFormData from './reducers/sweetFormData'
import sweetsReducer from './reducers/sweetsReducer'
import './index.css';
import 'semantic-ui-css/semantic.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { chainMiddleware } from 'redux-chain';


const rootReducer = combineReducers({ errorsReducer, sweetFormData, sweetsReducer })
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(chainMiddleware, thunk)))

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
// registerServiceWorker();
