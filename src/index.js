import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import { compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./routes/App";

const initialState = {
  desiredOffer: [],
  menuActive: "Deals",
};

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);