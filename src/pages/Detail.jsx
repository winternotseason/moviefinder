import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailMovieInfo } from "../services/api";
import DetailPageHeader from "../components/DetailPageHeader";
import TopContentLi from "../components/TopContentLi";

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
    plots: [{ plotText: "" }, { plotText: "" }],
    director: "",
    actors: [{ actorNm: "" }],
  });
  const [kr, setKr] = useState(true);
  const [topContent, setTopContent] = useState("기본소개");
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
        console.error(error);
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
    <div className="w-full flex flex-col items-center">
      {/* 헤더 */}
      <DetailPageHeader movieArr={movieArr} />
      <div className="w-full md:max-w-[70rem]">
        <div>
          <ul className="w-full flex border-b-[1px] font-light">
            <TopContentLi
              topContent={topContent}
              setTopContent={setTopContent}
              link="기본소개"
            >
              기본소개
            </TopContentLi>
            <TopContentLi
              topContent={topContent}
              setTopContent={setTopContent}
              link="감독/출연"
            >
              감독/출연
            </TopContentLi>{" "}
            <TopContentLi
              topContent={topContent}
              setTopContent={setTopContent}
              link="수상내역"
            >
              수상내역
            </TopContentLi>
          </ul>
        </div>
        <div className="p-4 h-96 border-b-[1px]">
          {topContent === "기본소개" && (
            <>
              <div className="flex space-x-2 text-black/60 mb-3 text-sm">
                <p
                  onClick={() => {
                    setKr(true);
                  }}
                  className={
                    kr
                      ? `text-black cursor-pointer font-semibold`
                      : "text-black/60 cursor-pointer"
                  }
                >
                  한국어
                </p>
                {movieArr.plots.length === 2 && (
                  <p
                    onClick={() => {
                      setKr(false);
                    }}
                    className={
                      kr
                        ? `text-black/60 cursor-pointer`
                        : "text-black cursor-pointer font-semibold"
                    }
                  >
                    ENG
                  </p>
                )}
              </div>
              <p className="text-black/90">
                {kr ? movieArr.plots[0].plotText : movieArr.plots[1].plotText}
              </p>
            </>
          )}{" "}
          {topContent === "감독/출연" && (
            <div>
              <div>
                <p className="mb-1 font-semibold">감독</p>
                <p className="text-sm">{movieArr.director}</p>
              </div>
              <div className="mt-5">
                <p className="mb-1 font-semibold">출연</p>
                <div className="flex space-x-1 w-full text-sm overflow-x-scroll">
                  {movieArr.actors.map((actor, index) => (
                    <p key={actor.actorNm} className="whitespace-nowrap">
                      {actor.actorNm}
                      {index < movieArr.actors.length - 1 && ", "}
                    </p>
                  ))}
                  <p className="whitespace-nowrap"> 외</p>
                </div>
              </div>
            </div>
          )}
          {topContent === "수상내역" && <p>수상내역</p>}
        </div>
      </div>
    </div>
  );
};

export default Detail;
