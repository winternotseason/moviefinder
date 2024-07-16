import MovieSwiper from "../components/MovieSwiper";
import gradient from "/main-black-gradient.png";
import movieBannerImg from "/main-banner.jpeg";
import ReactPlayer from "react-player";
import { useState } from "react";
const Home = () => {
  const [movieEnd, setMovieEnd] = useState(false);
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full relative">
          <ReactPlayer
            url="/videos/mainvideo.mp4"
            muted
            width="100%"
            height="100%"
            playing={true}
            playsinline={true}
            onEnded={() => {
              setMovieEnd(true);
            }}
          />
          <img src={gradient} className="w-full absolute top-0 left-0 h-full" />
          <div className="absolute top-80 left-20 text-white z-50">
            <p className="text-5xl font-bold mb-4">파묘</p>
            <p className="text-2xl font-light">
              새로운 맛의 <span className="font-semibold">K 오컬트</span> 탄생,
              2024년 첫 천만 영화!
            </p>
            <p className="text-2xl font-light">
              수상한 묘를 이장한 풍수사와 장의사, 무속인들에게 벌어지는 기이한
              사건
            </p>
            <p className="text-sm mt-2">
              장재헌 감독, 최민식, 김고은, 유해진, 이도헌 외
            </p>
          </div>
          {movieEnd && (
            <img src={movieBannerImg} className="w-full absolute top-0 animate-fade" />
          )}
        </div>{" "}
        {/* 영화 슬라이더 */}
        <div className="w-full p-5 max-w-[70rem]">
          <MovieSwiper />
        </div>
      </div>
    </div>
  );
};

export default Home;
