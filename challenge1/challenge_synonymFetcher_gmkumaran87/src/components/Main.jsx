import PropTypes from "prop-types";

const Main = ({
  word,
  synonyms,
  randomSynonmys,
  randomWord,
  randomDefinition,
}) => {
  const synonymsList = synonyms?.length > 0 ? synonyms : randomSynonmys;
  const synonymHeading =
    synonyms?.length > 0 || randomSynonmys?.length > 0 ? "Synonyms" : "";
  return (
    <div className="flex flex-col w-[80%] flex-3 border-l px-8 gap-6">
      <h2 className="text-6xl text-black-seq font-medium tracking-wide">
        {word || randomWord}
      </h2>
      <div className="flex flex-col items-start mt-6 gap-8">
        <h2 className="text-2xl text-black-seq font-medium tracking-wide">
          {synonymHeading}
        </h2>

        <ul className="flex gap-4 flex-wrap">
          {synonymsList?.map((synonym, index) => (
            <li
              className="capitalize  text-xl font-medium underline-offset-8 underline decoration-green-500 decoration-2"
              key={index}
            >
              {synonym}
            </li>
          ))}
        </ul>
        {randomDefinition && (
          <div className="flex flex-col items-start mt-6 gap-8">
            <h2 className="text-2xl text-black-seq font-medium tracking-wide">
              Definitions
            </h2>
            {randomDefinition}
          </div>
        )}
      </div>
    </div>
  );
};

Main.propTypes = {
  word: PropTypes.string,
  synonyms: PropTypes.array,
  randomSynonmys: PropTypes.array,
  randomWord: PropTypes.string,
  randomDefinition: PropTypes.string,
};

export default Main;
