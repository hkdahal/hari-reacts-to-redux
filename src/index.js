import React from "react";
import { render } from "react-dom";
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
  <div>
    <h1>Hari getting into react/redux </h1>
    <Stream />,
  </div>
);

render(<App />, document.getElementById("root"));
