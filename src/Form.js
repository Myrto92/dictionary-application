import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
