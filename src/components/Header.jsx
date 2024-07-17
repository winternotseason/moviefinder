import { CiSearch } from "react-icons/ci";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between items-center h-12 p-3 bg-black">
      <Link to="/">
        <p className="font-semibold text-white">MOVIE FINDER</p>
      </Link>
      <CiSearch color="#eeeeee" size={25} />
    </div>
  );
};

export default Header;
