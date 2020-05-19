import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




// 1. In order to wire up redux/react app, we need react-redux.
// we need Provider ReactCompoent, to be around everything.

import { Provider } from 'react-redux';

// 2. create the redux store, so that redux exists, and  the provider has a store!!
import { createStore } from 'redux';

// 3. reducers to populate the store
// 3a. we always start with a rootReducers
// 4. make individual reducer to hand to the rootReducer (3)
import rootReducers from './reducers/rootReducers';
// 5. create the store (2) by passing it the root rootReducer, which is made up of the reducers
const theStore = createStore(rootReducers);

// provider is the glue between react and redux. Give it to store!!

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

