import React from "react";

import { CompareContextProvider } from "context/CompareContextProvider";
import Compare from "components/Compare";

const App = () => (
  <CompareContextProvider>
    <Compare />
  </CompareContextProvider>
);

export default App;
