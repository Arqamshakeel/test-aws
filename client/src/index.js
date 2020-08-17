import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import Reducer from "./Redux/Reducer/CombineReducers";
import HeaderWithDrawer from "./components/header/HeaderWithDrawer";
const store = createStore(Reducer, applyMiddleware(logger));
ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
      {/* <HeaderWithDrawer /> */}
    </Provider>
  </React.Fragment>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
