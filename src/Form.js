import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Photos from "./Photos.js";
import Results from "./Results.js";

export default function Form() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function HandlePixelsResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(api).then(handleResponse);

    let pixelsKey = "563492ad6f91700001000001ec31a84d03f743e3be0c40f58e689f08";
    let pixelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `Bearer ${pixelsKey}` };
    axios.get(pixelsUrl, { headers: headers }).then(HandlePixelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
