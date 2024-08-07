import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailMovieInfo } from "../services/api";
import DetailPageHeader from "../components/DetailPageHeader";
import TopContentLi from "../components/TopContentLi";
import BottomContentLi from "../components/BottomContentLi";
import LoadingSpinner from "../components/Loading-Spinner";

const Detail = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [movieArr, setMovieArr] = useState({
    posters: [],
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
  const [bottomContent, setBottomContent] = useState("포스터");
  const movieName = searchParams.get("moviename");
  const releaseDt = searchParams.get("release");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getDetailMovieInfo(movieName, releaseDt);
        setMovieArr(res);
        setLoading(false);

        // console.log(res); // 데이터가 정상적으로 출력되는지 확인
      } catch (error) {
        console.error(error);
      }
    };

    if (searchParams.has("moviename") && searchParams.has("release")) {
      fetchData();
    }
  }, [searchParams, movieName, releaseDt]);

  if (loading) {
    return <LoadingSpinner color="#3c3c3c" />;
  }

  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* 헤더 */}
      <DetailPageHeader movieArr={movieArr} />
      <div className="w-full md:max-w-[70rem] ">
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
        <div className="p-4 min-h-60 border-b-[1px]">
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
              <p className="text-black/90 text-xs md:text-base">
                {kr ? movieArr.plots[0].plotText : movieArr.plots[1].plotText}
              </p>
            </>
          )}{" "}
          {topContent === "감독/출연" && (
            <div>
              <div>
                <p className="mb-1 text-xs md:text-base font-semibold">감독</p>
                <p className="text-xs md:text-base">{movieArr.director}</p>
              </div>
              <div className="mt-5">
                <p className="mb-1 font-semibold text-xs md:text-base">출연</p>
                <div className="flex space-x-1 w-full text-xs md:text-base overflow-x-auto pb-2">
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
          {topContent === "수상내역" && (
            <div className="text-sm md:text-base space-y-5 md:space-y-10 mt-2">
              {movieArr.awards[0] !== "" ? (
                movieArr.awards.map((award) => (
                  <p
                    className="pl-2 border-l-[1px] border-black/40 font-medium"
                    key={award}
                  >
                    {award}
                  </p>
                ))
              ) : (
                <h1>수상 내역이 없습니다</h1>
              )}
            </div>
          )}
        </div>

        <ul className="w-full flex border-b-[1px] font-light">
          <BottomContentLi
            bottomContent={bottomContent}
            setBottomContent={setBottomContent}
            link={"포스터"}
          >
            포스터
          </BottomContentLi>
          <BottomContentLi
            bottomContent={bottomContent}
            setBottomContent={setBottomContent}
            link={"스틸컷"}
          >
            스틸컷
          </BottomContentLi>
        </ul>
        <div className="p-4 h-96">
          <div className="flex space-x-1  text-xs md:text-base pb-2">
            {bottomContent === "포스터" && (
              <div className="flex space-x-1 w-full text-xs md:text-base overflow-x-auto pb-2">
                {movieArr &&
                  movieArr.posters.map((poster) => (
                    <div
                      key={poster}
                      className="whitespace-nowrap flex-shrink-0"
                    >
                      <img src={poster} className="w-full" />
                    </div>
                  ))}
              </div>
            )}
            {bottomContent === "스틸컷" && (
              <div className="flex space-x-1 w-full text-xs md:text-base overflow-x-scroll pb-2">
                {movieArr &&
                  movieArr.stlls.map((poster) => (
                    <div
                      key={poster}
                      className="whitespace-nowrap flex-shrink-0"
                    >
                      <img src={poster} className="w-full" />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
