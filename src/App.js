import React from "react";

import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <div className="container">
        {" "}
        <Form />
      </div>
    </div>
  );
}

export default App;
