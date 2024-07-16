import MovieSwiper from "../components/MovieSwiper";

import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full">
          <ReactPlayer
            url='/videos/mainvideo.mp4'
            muted
            width="100%"
            height="100%"
            playing={true}
            playsinline={true}
            onEnded={()=>{console.log(111)}}
          />
        </div>
        {/* 영화 슬라이더 */}
        <div className="w-full p-5 max-w-[70rem]">
          <MovieSwiper />
        </div>
      </div>
    </div>
  );
};

export default Home;
