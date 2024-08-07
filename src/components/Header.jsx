import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import logo from "/moviefinder-logo.png";
import { useState } from "react";
const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center h-12 p-3 bg-black md:hidden">
        <Link to="/">
          <p className="font-bold text-white">MOVIEFINDER</p>
        </Link>
        <Link to="/search">
          <CiSearch color="#eeeeee" size={25} />
        </Link>
      </div>
      {/* 데스크탑 헤더 */}
      <div className="box-content h-32 p-10 bg-black hidden md:flex md:justify-center">
        <div className="flex justify-between items-center w-full max-w-[70rem]">
          {/* 헤더 내부 */}
          <Link to="/">
            <div className="w-48">
              <img src={logo} />
            </div>
          </Link>
          <div className="border-b-[1px] border-white/30 self-end">
            <form
              className="flex items-center"
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search/list?query=${query}`);
                setQuery("");
                // console.log(query);
              }}
            >
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className="w-72 p-2 text-lg bg-black text-white font-light outline-none"
                placeholder="영화를 검색해보세요"
              />
              <button>
                <CiSearch color="#a4a4a4" size={30} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
