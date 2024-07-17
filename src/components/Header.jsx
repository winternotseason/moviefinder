import { CiSearch } from "react-icons/ci";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between items-center h-12 p-3 bg-black">
      <Link to="/">
          <li className="w-1/3 text-center py-3 border-black/20">감독/출연</li>
        <p className="font-bold text-white"></p>
      </Link>
      <CiSearch color="#eeeeee" size={25} />
    </div>
  );
};

export default Header;
