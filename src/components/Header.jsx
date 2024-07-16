import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-12 p-3">
      <p className="font-semibold">MOVIE FINDER</p>
      <CiSearch size={25}/>
    </div>
  );
};

export default Header;
