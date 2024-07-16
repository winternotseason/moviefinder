import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { getDailyBoxOffice } from "../services/api";
import gradient from "../assets/gradient-black.png";
import Twelve from "../assets/12.svg";
import Fifteen from "../assets/fifteen.svg";
import All from "../assets/All.svg";
import Adult from "../assets/adult.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function MovieSwiper() {
  const [dailyBoxOffice, setDailyBoxOffice] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchDailyBoxOffice = async () => {
      const DailyBoxOffice = await getDailyBoxOffice();
      setDailyBoxOffice(DailyBoxOffice);
    };
    setLoading(false)
    fetchDailyBoxOffice();
  }, []);

  const ratingToSvg = {
    "12세관람가": Twelve,
    "12세이상관람가": Twelve,
    "15세이상관람가": Fifteen,
    "15세관람가": Fifteen,
    전체관람가: All,
    "18세관람가(청소년관람불가)": Adult,
  };
  if(loading){
    return <h1>로딩중</h1>
  }
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
        {dailyBoxOffice.map((movie) => (
          <SwiperSlide key={movie.movieNm}>
            <div>
              <div className="relative rounded-lg overflow-hidden w-full h-full">
                <img src={movie.posters} alt={movie.movieNm} />
                <img
                  className="absolute bottom-0 left-0 z-10"
                  src={gradient}
                  alt="gradient"
                />
              </div>

              <p className="absolute z-20 bottom-14 left-2 text-5xl italic text-white font-medium">
                {movie.rank}
              </p>
              <p className="absolute z-20 bottom-14 right-4 text-sm text-white">
                예매율 {movie.booking_rate}%
              </p>
              <div className="flex items-center mt-2 justify-center">
                <div className="w-4 h-4">
                  <img src={ratingToSvg[movie.rating]} />
                </div>
                <p className="font-semibold text-base ml-1">
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
