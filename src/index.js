import React from 'react';
import ReactDOM from 'react-dom';
import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { news } from '../src/reducers/newsReducer';

const enhancers = compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const rootReducer = combineReducers({
  news: news
});
const store = createStore(rootReducer, enhancers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
