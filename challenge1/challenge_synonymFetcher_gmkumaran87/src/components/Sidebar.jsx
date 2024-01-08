import { TYPES } from "../common/constant";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start w-full flex-1 gap-6 max-w-[200px] px-4">
      <h2 className="text-3xl w-full text-black-seq  font-medium tracking-wide">
        Types
      </h2>
      <ul className="flex flex-col items-start gap-6 mt-6">
        {TYPES.map((type, index) => (
          <li
            key={index}
            className="text-black-seq text-2xl underline decoration-green-400 underline-offset-8 cursor-pointer"
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
