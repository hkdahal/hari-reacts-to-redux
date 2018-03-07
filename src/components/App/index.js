// App does not much here but passing all children.
// We will not use this component in this tutorial anymore,
// but in future implementations
// you could use this component to have
// static Header, Footer, Playlist or Player components
// while the children are changing.

import React from "react";

function App({ children }) {
  return <div>{children}</div>;
}

export default App;
