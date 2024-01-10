import React, { useEffect, useState } from "react";
import "./SynonymFinder.css";

function SynonymFinder() {
  const [searchWord, setSearchWord] = useState("");
  const [allsynonyms, setAllsynonyms] = useState([]);

  const onChangeWord = (e) => {
    setSearchWord(e.target.value);
  };

  const handleClick = () => {
    const apiUrl = `https://api.api-ninjas.com/v1/thesaurus?word=${searchWord}`;

    fetch(apiUrl, {
      headers: {
        "X-Api-Key": "+iAXNpprBu9o4cEL+ptyuQ==daJr5PrSNTTozN5D",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.synonyms.length !== 0) {
          const fiveSynonym = data.synonyms.slice(0, 5);
          setAllsynonyms(fiveSynonym);
        } else {
          setAllsynonyms([]);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setAllsynonyms([]);
      });
  };

  return (
    <div className="synonym-content">
      <h1>Synonym Finder</h1>
      <div>
        <input
          className="synonym-userInput"
          placeholder="Type to search.."
          onChange={onChangeWord}
        />
        <button className="searchButton" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="synonyms-list">
        {allsynonyms.map((synonym, index) => (
          <span key={index} className="synonym-tag">
            {synonym}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SynonymFinder;
