import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";

const logger = createLogger();

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger)),
    initialState
  );
}
