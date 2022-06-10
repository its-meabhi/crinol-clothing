import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import reducers from "./reducer/reducer";

import { persistStore } from "redux-persist";

export const AuthStore = createStore(reducers, {}, applyMiddleware(thunk));

export const Persistor = persistStore(AuthStore)
