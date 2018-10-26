import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const initialState = {
    // app: { battleTag: "Oageoni#2192" }
  };
  
  const enhancers = [];
  if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }
  const composedEnhancers = compose(
    applyMiddleware(thunk),
    ...enhancers
  );
  
  const persistConfig = {
    key: "root",
    storage: storage
  };
  export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    composedEnhancers
  );
  export let persistor = persistStore(store);