import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { AuthStore, Persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.render(
  <Provider store = {AuthStore}>
  <React.StrictMode>
    <PersistGate persistor={Persistor}>
      <App />
    </PersistGate>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
