import { useEffect, useState } from "react";
import { getDailyBoxOffice } from "../services/api";

const Home = () => {
  const [dailyBoxOffice, setDailyBoxOffice] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDailyBoxOffice = async () => {
      setLoading(true);
      const DailyBoxOffice = await getDailyBoxOffice();
      setDailyBoxOffice(DailyBoxOffice);
      setLoading(false);
    };
    fetchDailyBoxOffice();
  }, []);

  if (loading) {
    return <h1>로딩중입니다...</h1>;
  }

  return (
    <div>
      <div>
        <ul className="list-none">
          {dailyBoxOffice.map((movie) => (
            <li key={movie.movieNm}>
              <div>
                <img src={movie.posters} alt="poster" />
              </div>
              <div>
                {movie.rating} {movie.movieNm} {movie.rank} {movie.booking_rate}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
