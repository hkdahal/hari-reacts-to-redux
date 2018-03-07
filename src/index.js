import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import * as actions from "./actions";
import Stream from "./components/Stream";

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
  <Provider store={store}>
    <div>
      <h1>Hari getting into react/redux </h1>
      <Stream />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
