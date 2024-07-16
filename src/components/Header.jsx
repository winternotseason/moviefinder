import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-12 p-3 bg-black">
      <p className="font-semibold text-white">MOVIE FINDER</p>
      <CiSearch color="#eeeeee" size={25}/>
    </div>
  );
};

export default Header;
