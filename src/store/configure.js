import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import penderMiddleware from "redux-pender";
import * as modules from "./modules";

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

// In developement mode, activate Redux Devtools
const isDev = process.env.NODE_ENV === "development";
const devTools =
  isDev &&
  typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer = devTools || compose;

const configure = preloadedState =>
  createStore(
    reducers,
    preloadedState,
    composeEnhancer(applyMiddleware(...middlewares))
  );

export default configure;
