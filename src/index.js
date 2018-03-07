import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import configureStore from "./stores/configureStore"
import Stream from "./components/Stream"
import Callback from "./components/Callback"

const store = configureStore()
const App = () => (
  <div>
    <h1>Hari getting into react/redux </h1>
    <Stream />
  </div>
)

render(
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/callback" component={Callback} />
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById("root")
)
