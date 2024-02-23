import React from "react";
import "./SynonymList.css";

const SynonymsList = ({ synonyms, wordsCount }) => {
  return (
    <>
      {synonyms?.length > 0 ? (
        <div className="tags-container">
          {synonyms.slice(0, wordsCount).map((word, index) => (
            <p className="tags" key={index}>
              {word}
            </p>
          ))}
        </div>
      ) : (
        <div>
          <p>No Synonyms Available for this word try another word</p>
        </div>
      )}
    </>
  );
};

export default SynonymsList;
