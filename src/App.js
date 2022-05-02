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
      <footer>
        Coded by {"  "}
        <span>
          <a href="https://github.com/Myrto92/dictionary-application">
            {" "}
            Myrto Vergou
          </a>{" "}
        </span>
      </footer>
    </div>
  );
}

export default App;
