import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import configureStore from "./stores/configureStore";
import * as actions from "./actions";
import Stream from "./components/Stream";
import Callback from "./components/Callback";

const tracks = [
  {
    title: "First Track"
  },
  {
    title: "Another track"
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

const App = () => (
  <div>
    <h1>Hari getting into react/redux </h1>
    <Stream />
  </div>
);

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
);
