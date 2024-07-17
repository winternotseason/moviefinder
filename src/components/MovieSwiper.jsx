import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import gradient from "/gradient-black.png";
import Twelve from "/12.svg";
import Fifteen from "/fifteen.svg";
import All from "/All.svg";
import Adult from "/adult.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import DetailLink from "./DetailLink";

export default function MovieSwiper({ movies }) {
  const ratingToSvg = {
    "12세관람가": Twelve,
    "12세이상관람가": Twelve,
    "15세이상관람가": Fifteen,
    "15세관람가": Fifteen,
    "고등학생가": Fifteen,
    전체관람가: All,
    "18세관람가(청소년관람불가)": Adult,
    청소년관람불가: Adult,
  };
  
  return (
    <>
      <Swiper
        ceteredSlides={true}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.movieNm}>
            <div>
              <div className="relative rounded-lg overflow-hidden w-full h-full">
                <img src={movie.posters} alt={movie.movieNm} />
                <img
                  className="absolute bottom-0 left-0 z-10"
                  src={gradient}
                  alt="gradient"
                />
                <p className="absolute z-20 bottom-2 left-2 text-5xl italic text-white font-medium">
                  {movie.rank}
                </p>
                <p className="absolute z-20 bottom-2 right-3 text-sm text-white">
                  예매율 {movie.booking_rate}%
                </p>
                <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-black/70 z-50 opacity-0 hover:opacity-100">
                  <DetailLink
                    moviename={movie.movieNm}
                    releaseDt={movie.repRlsDate}
                  />
                </div>
              </div>

              <div className="flex items-center mt-2 justify-center">
                <div className="w-4 h-4">
                  <img src={ratingToSvg[movie.rating]} />
                </div>
                <p className="font-semibold text-sm ml-1 text-white">
                  {movie.movieNm.length > 10
                    ? `${movie.movieNm.slice(0, 11)}...`
                    : movie.movieNm}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  {movie.nation} · {movie.runtime}분
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

MovieSwiper.propTypes = {
  movies: PropTypes.array.isRequired,
};
