import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import createHistory from "history/createBrowserHistory"
import {routerMiddleware} from "react-router-redux"
import rootReducer from "../reducers/index"

const logger = createLogger()
const history = createHistory()
const router = routerMiddleware(history)

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, router, logger)),
    initialState
  )
}
