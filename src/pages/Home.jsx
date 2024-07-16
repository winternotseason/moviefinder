import MovieSwiper from "../components/MovieSwiper";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center">
        {/* 영화 슬라이더 */}
        <div className="w-full p-5 max-w-[70rem]">
          <MovieSwiper />
        </div>
      </div>
    </div>
  );
};

export default Home;
