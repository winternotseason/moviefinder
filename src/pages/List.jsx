import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieListFromQuery } from "../services/api";
import LoadingSpinner from "../components/Loading-Spinner";
import SearchInput from "../components/SearchInput";
const List = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("query");
  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      const movieList = await getMovieListFromQuery(query);
      setMovieList(movieList);
      setLoading(false);
    };
    fetchList();
  }, [query]);
  if (loading) {
    return <LoadingSpinner color="#eeeeee" />;
  }
  // console.log(movieList);
  return (
    <div className="w-full flex flex-col items-center min-h-[60rem]">
      <SearchInput />
      <div className="p-5 md:p-10 max-w-[70rem]">
        <h1 className="font-medium md:text-lg">
          영화 검색 결과{" "}
          <span className="font-bold text-red-500">{movieList.length}</span>건
        </h1>
        <ul className="w-full grid grid-cols-3 gap-x-3 md:grid-cols-4 mt-5">
          {movieList.map((movie) => (
            <li key={movie.title} className="flex flex-col">
              <Link
                to={`/detail?moviename=${movie.title}&release=${movie.releaseDate}`}
              >
                <div className="w-full aspect-poster rounded-lg overflow-hidden">
                  {movie.poster === "" ? (
                    <img src="/no_poster.png" className="w-full h-full" />
                  ) : (
                    <img src={movie.poster} className="w-full h-full" />
                  )}
                </div>
                <div className="flex flex-col items-center mt-1 h-20 md:h-32 text-[0.7rem] md:text-lg">
                  <p className="text-center">{movie.title}</p>
                  <p className=" text-black/50">
                    {movie.releaseDate.slice(0, 4) +
                      "." +
                      movie.releaseDate.slice(4, 6) +
                      "." +
                      movie.releaseDate.slice(6, 8)}{" "}
                    개봉
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
