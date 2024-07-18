import { CiSearch } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getDailyBoxOffice } from "../services/api";
import LoadingSpinner from "../components/Loading-Spinner";
const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [movieRank, setMovieRank] = useState([]);
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRank = async () => {
      setLoding(true);
      const rank = await getDailyBoxOffice();
      setMovieRank(rank);
      setLoding(false);
    };
    fetchRank();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[30rem] md:min-h-[40rem]">
        <LoadingSpinner color="#f56363" />
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[70rem] ">
        {/* input 공간 */}
        <div className="py-3 px-5 border-b-[12px] border-black/5 md:hidden">
          <form
            className="flex items-center"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search/list?query=${inputValue}`);
              setInputValue("");
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              placeholder="검색어를 입력해주세요."
              className="w-full font-light outline-none"
            />
            {inputValue && (
              <TiDeleteOutline
                size={25}
                color="#9b9b9b"
                onClick={() => {
                  setInputValue("");
                }}
              />
            )}
            <button>
              <CiSearch size={25} className="ml-4" />
            </button>
          </form>
        </div>
        {/* 메인 공간 */}
        <div>
          <ul className="w-full flex flex-col px-5 pb-10">
            <h1 className="py-5 text-sm font-semibold md:text-2xl">오늘의 영화</h1>
            {movieRank &&
              movieRank.map((movie) => (
                <li
                  key={movie.rank}
                  className="flex py-3 md:py-7 text-sm md:text-xl border-b-[1px] border-black/10"
                >
                  <p className="flex w-7 justify-center font-semibold text-red-500">
                    {movie.rank}
                  </p>
                  <Link
                    to={`/detail?moviename=${movie.movieNm}&release=${movie.repRlsDate}`}
                  >
                    <p className="ml-2">{movie.movieNm}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
