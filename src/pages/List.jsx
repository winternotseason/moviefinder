import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieListFromQuery } from "../services/api";
import LoadingSpinner from "../components/Loading-Spinner";
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
  console.log(movieList);
  return (
    <div>
      <div className="p-5">
        <h1 className="font-medium">
          영화 검색 결과{" "}
          <span className="font-bold text-red-500">{movieList.length}</span>건
        </h1>
        <ul className="grid grid-cols-3 gap-x-2 mt-5">
          {movieList.map((movie) => (
            <li key={movie.title} className="flex flex-col items-center h-60">
              <Link
                to={`/detail?moviename=${movie.title}&release=${movie.releaseDate}`}
              >
                <div className="rounded-lg overflow-hidden">
                  {movie.poster === "" ? (
                    <img src="/no_poster.png" className="w-full h-40" />
                  ) : (
                    <img src={movie.poster} className="w-full h-40" />
                  )}
                </div>
                <div className="flex flex-col items-center mt-1 h-16">
                  <p className="text-sm text-center">{movie.title}</p>
                  <p className="text-xs text-black/50">
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
