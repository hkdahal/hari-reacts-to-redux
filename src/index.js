import React from "react";
import { render } from "react-dom";
import Stream from './components/Stream';

const tracks = [
  {
    title: "First Track"
  },
  {
    title: "Another track"
  }
];

const App = () => (
  <div>
    <h1>Hari getting into react/redux </h1>
    <Stream tracks={tracks} />,
  </div>
);

render(<App />, document.getElementById("root"));
