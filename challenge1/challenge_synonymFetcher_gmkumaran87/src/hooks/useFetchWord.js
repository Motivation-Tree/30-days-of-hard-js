import { useEffect, useState } from "react";
import { fetchRandomWord } from "../services/synonym..services";

export const useFetchWord = () => {
  const [word, setWord] = useState("");
  const [initialSynonym, setInitialSynonym] = useState([]);
  const [error, setError] = useState("");
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    const fetchRandom = async () => {
      try {
        const result = await fetchRandomWord();
        console.log("Component fetch random word", result);
        setWord(result?.word);
        setInitialSynonym(result?.results[0]?.synonyms);
        setDefinition(result?.results[0]?.definition);
      } catch (error) {
        setError(error);
      }
    };

    fetchRandom();
  }, []);

  return [word, initialSynonym, error, definition];
};
