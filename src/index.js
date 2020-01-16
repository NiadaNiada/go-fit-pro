
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
import App from "./components/App";

const app = document.getElementById("root");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App footer="I am the footer" />
    </Provider>
  </BrowserRouter>,
  app
);