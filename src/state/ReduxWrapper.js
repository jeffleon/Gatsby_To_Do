import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "."
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'


const initialState = {}
const middleware = [thunk]
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware))
)
var persistor = persistStore(store)
store.subscribe(() => console.log(store.getState()));
export default ({ element }) => <Provider store={store}><PersistGate persistor={persistor}>{element}</PersistGate></Provider>