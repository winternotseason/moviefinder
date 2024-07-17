import { useEffect, useState } from "react";
import { getDailyBoxOffice } from "../services/api";
import MovieSwiper from "./MovieSwiper";
import LoadingSpinner from "./Loading-Spinner";

const DailyBoxOfficeSlider = () => {
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
    return <LoadingSpinner />;
  }
  return <MovieSwiper movies={dailyBoxOffice} />;
};

export default DailyBoxOfficeSlider;
