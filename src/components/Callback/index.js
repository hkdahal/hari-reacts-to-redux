import React from "react";

class Callback extends React.Component {
  componentDidMount() {
    console.log("did mount");
  }

  render() {
    return (
      <div>
        <p>This page should close soon.</p>
      </div>
    );
  }
}

export default Callback;
