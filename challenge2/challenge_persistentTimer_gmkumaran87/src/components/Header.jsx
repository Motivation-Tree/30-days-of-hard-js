const Header = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-between w-[50%] border-b-[1px] py-5">
        <h1 className="text-white text-3xl font-bold text-center ">
          Persistent Timer
        </h1>
        <h3 className="text-white  text-xl font-medium">Login</h3>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
