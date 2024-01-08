import { useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import SynonymList from "./components/SynonymList";
import "./App.css";

export default function App() {
  const [text, setText] = useState(null);
  const [synonyms, setSynonyms] = useState(null);
  const wordsCount = 30;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_THESAURAS_API_KEY;
      const response = await fetch(
        `https://api.api-ninjas.com/v1/thesaurus?word=${text}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey,
          },
        }
      );

      const responseData = await response.json();
      setSynonyms(responseData.synonyms);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching synonyms:", error);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Synonym Finder</h1>
        <input
          placeholder="Enter a Word to find synonyms"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="send-btn" onClick={handleSubmit}>
          Find Synonym
        </button>
      </div>
      {loading && text && <LoadingSpinner />}
      {synonyms && <SynonymList synonyms={synonyms} wordsCount={wordsCount} />}
    </div>
  );
}
