import React from "react";
import ReactDOM from "react-dom";
import SearchComponent from "./Droplist";

import "./index.css";

const App = () => {
  return(
    <div>
      <h1>Search Component</h1>
      <SearchComponent />
    </div>
  );
  };
ReactDOM.render(<App />, document.getElementById("app"));
