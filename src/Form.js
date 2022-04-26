import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(api).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word"
          onChange={handleChange}
          autoFocus="true"
        />
        <input type="submit" value="Search" className="submit-button" />
      </form>
    </div>
  );
}
