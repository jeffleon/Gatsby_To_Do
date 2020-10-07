import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "."


const initialState = {}
const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
)
store.subscribe(() => console.log(store.getState()));
export default ({ element }) => <Provider store={store}>{element}</Provider>