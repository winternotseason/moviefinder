import { Link, useNavigate } from "react-router-dom";
import logo from "/moviefinder-logo-black.png";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
const SearchHeader = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center h-12 p-3 bg-white border-b-[1px] md:hidden">
        <Link to="/"><p className="font-light">HOME</p></Link>
        <p>통합검색</p>
        <p></p>
      </div>
      {/* 데스크탑 헤더 */}
      <div className="box-content h-32 p-10 bg-white hidden md:flex md:justify-center">
        <div className="flex justify-between items-center w-full max-w-[70rem]">
          {/* 헤더 내부 */}
          <Link to="/">
            <div className="w-48">
              <img src={logo} />
            </div>
          </Link>
          <div className="border-b-[1px] border-black/30 self-end">
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
                className="w-72 p-2 text-lg  text-black/70 font-light outline-none"
                placeholder="영화를 검색해보세요"
              />
              <button>
                <CiSearch color="#7c7c7c" size={30} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
