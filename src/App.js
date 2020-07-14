import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Router from './main/routes'
import reducer from './main/store/reducers'

import { Provider } from 'react-redux'
import { createStore } from 'redux';

const store = createStore(
  reducer(), {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState())

function App() {
  return <Provider store={store}>
    <Router />

  </Provider>


}

export default App;
