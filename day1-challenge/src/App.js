import { useState } from "react";
import "./App.css";

function App() {
  const [searchWord, setSearchWord] = useState("");
  console.log(searchWord);
  const [synonyms, setSynonyms] = useState([]);
  console.log("synonyms", synonyms);
  const [errorMessage, setErrorMessage] = useState("");
  const firstfive = synonyms?.slice(0, 5);
  console.log("firstfive", firstfive);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSynonyms([]);
    setSearchWord(e.target.value);
    setErrorMessage("");
  };

  const handleSearch = () => {
    const apiUrl = `https://api.api-ninjas.com/v1/thesaurus?word=${searchWord}`;
    console.log("apicall", searchWord);
    fetch(apiUrl, {
      headers: {
        "X-Api-Key": "IBf6CWhXjRHiyKcOz4oCDA==zmBNDteoT1ZvEV2z",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.synonyms.length !== 0) {
          setSynonyms(data.synonyms);
          setErrorMessage("");
        } else {
          setSynonyms([]);
          setErrorMessage("Sorry!!! No Synonyms Found");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setSynonyms([]);
        setErrorMessage("Error fetching data. Please try again.");
      });
  };
  const handleClear = () => {
    setSearchWord("");
    setSynonyms([]);
    setErrorMessage("");
  };
  return (
    <div className="App">
      <>
        <label for="searchWord">
          <h2> Enter a Word and Click on Search</h2>
        </label>
        <br />
        <div>
          <input
            type="text"
            id="searchWord"
            value={searchWord}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button class="buttons" onClick={handleSearch}>
            {" "}
            Search
          </button>
          <button class="buttons" onClick={handleClear}>
            {" "}
            Clear
          </button>
        </div>
      </>
      <div>
        <ol>
          {firstfive.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ol>
      </div>
      <div>
        {" "}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default App;
