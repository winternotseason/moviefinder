import MovieSwiper from "../components/MovieSwiper";
import gradient from "/banner-gradient.png";
import movieBannerImg from "/main-banner.jpeg";
import ReactPlayer from "react-player";
import { useState } from "react";
const Home = () => {
  const [movieEnd, setMovieEnd] = useState(false);
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-center items-center bg-black">
        <div className="relative w-full max-w-[90rem] min-w-[40rem]">
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
          <img src={gradient} className="w-full h-full absolute top-0 left-0 z-20" />
          <div className="absolute top-[60%] left-[25%]  md:left-[10%] text-white z-30">
            <p className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">파묘</p>
            <p className="text-sm md:text-2xl">
              새로운 맛의 <span className="font-semibold">K 오컬트</span> 탄생,
              올해 첫 천만 영화!
            </p>
            <p className="text-sm md:text-2xl">
            “전부 잘 알 거야… 묘 하나 잘못 건들면 어떻게 되는지”
            </p>
            <p className="text-xs font-ight md:text-sm mt-1 md:mt-2">
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
