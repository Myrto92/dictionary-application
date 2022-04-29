import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Results from "./Results.js";

export default function Form() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);

    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();

    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(api).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search}>
        <section>
          <input
            type="search"
            placeholder="Type a word"
            onChange={handleChange}
            autoFocus={true}
          />
          <input type="submit" value="Search" className="submit-button" />
        </section>
      </form>

      <Results results={results} />
    </div>
  );
}
