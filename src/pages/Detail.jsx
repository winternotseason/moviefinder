import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailMovieInfo } from "../services/api";
const Detail = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [movieArr, setMovieArr] = useState({
    posters: "",
    titleEng: "",
    releaseDate: "",
    runtime: "",
    genre: "",
    company: "",
    title: "",
  });
  const movieName = searchParams.get("moviename");
  const releaseDt = searchParams.get("release");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getDetailMovieInfo(movieName, releaseDt);
        setMovieArr(res);
        setLoading(false);

        console.log(res); // 데이터가 정상적으로 출력되는지 확인
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchParams.has("moviename") && searchParams.has("release")) {
      fetchData();
    }
  }, [searchParams, movieName, releaseDt]);

  if (loading) {
    return <h1>로딩중</h1>;
  }

  return (
    <div>
      {/* 헤더 */}
      <div className="w-full h-72 bg-black/100 flex items-end">
        <div className="flex mb-4 z-50">
          <div className="w-24 ml-4">
            <img src={`${movieArr.posters[0]}`} className="w-full" />
          </div>

          <div className="text-white flex flex-col self-end w-56 ml-4">
            <div>
              <p className="text-base font-bold">{movieArr.title}</p>
              <p className="text-xs font-extralight text-white/60">
                {movieArr.titleEng}
              </p>
            </div>
            <div className="mt-2 text-[0.7rem] flex flex-col font-medium text-white/80">
              <div className="flex">
                <p className="">
                  {movieArr.releaseDate.slice(0, 4) +
                    "." +
                    movieArr.releaseDate.slice(4, 6) +
                    "." +
                    movieArr.releaseDate.slice(6, 8)}{" "}
                </p>
                <p className="ml-1">{movieArr.runtime}분</p>
              </div>
              <div className=" font-light text-white/80">
                <p className="mr-1">{movieArr.genre}</p>
              </div>{" "}
              <div className="font-light text-white/80">
                <p>{movieArr.company}</p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
