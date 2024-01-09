import { useState } from "react";
import PropTypes from "prop-types";

const InputContainer = ({ fetchSynonym }) => {
  const [inputWord, setInputWord] = useState("");
  return (
    <div className="flex items-center gap-4 w-[80%] justify-center pt-8">
      <input
        type="text"
        name="synonym"
        placeholder="Start typing any word..."
        value={inputWord}
        className="border border-gray-200 rounded-md p-3.5 text-xl focus:ring-primary w-full"
        onChange={(e) => setInputWord(e.target.value)}
      />
      <button
        type="submit"
        onClick={fetchSynonym(inputWord)}
        className="rounded-md px-4 py-3.5 text-xl bg-green-200 font-medium "
      >
        Synonym
      </button>
    </div>
  );
};

InputContainer.propTypes = {
  fetchSynonym: PropTypes.func,
};

export default InputContainer;
