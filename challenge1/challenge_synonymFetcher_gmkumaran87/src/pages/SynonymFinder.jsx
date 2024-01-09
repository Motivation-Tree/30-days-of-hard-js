import { useState } from "react";
import { fetchSynonyms } from "../services/synonym..services";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import InputContainer from "../components/InputContainer";
import { useFetchWord } from "../hooks/useFetchWord";

const SynonymFinder = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [randomWord, randomSynonmys, errors, randomDefinition] = useFetchWord();

  const fetchSynonym = (searchWord) => async () => {
    setWord(searchWord.toLowerCase());
    try {
      setLoading("isLoading");
      const result = await fetchSynonyms(searchWord);
      setSynonyms(result);
    } catch (error) {
      setError(error);
      setLoading("error");
    } finally {
      setLoading("completed");
    }
  };

  if (loading === "isLoading") {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        <p className="text-2xl text-black-seq">Loading response....</p>
      </div>
    );
  } else if (loading === "error") {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        <p>Please try again sometime later {error}</p>
      </div>
    );
  }
  console.log("Page", { randomSynonmys, randomDefinition, randomWord });
  return (
    <div className="h-full flex flex-col items-center justify-start w-full gap-6">
      <InputContainer fetchSynonym={fetchSynonym} />

      <div className="flex w-full h-full p-4">
        <Sidebar />
        <Main
          word={word}
          synonyms={synonyms}
          randomSynonmys={randomSynonmys}
          randomWord={randomWord}
          randomDefinition={randomDefinition}
        />
        <div className="flex-3"></div>
      </div>
    </div>
  );
};

SynonymFinder.propTypes = {};

export default SynonymFinder;
