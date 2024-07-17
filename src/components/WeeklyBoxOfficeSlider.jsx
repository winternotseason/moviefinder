import { useEffect, useState } from "react";
import { getWeeklyBoxOffice } from "../services/api";
import MovieSwiper from "./MovieSwiper";
import LoadingSpinner from "./Loading-Spinner";

const WeeklyBoxOfficeSlider = () => {
  const [weeklyBoxOffice, setWeeklyBoxOffice] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchWeeklyBoxOffice = async () => {
      setLoading(true);
      const weeklyBoxOffice = await getWeeklyBoxOffice();
      setWeeklyBoxOffice(weeklyBoxOffice);
      setLoading(false);
    };

    fetchWeeklyBoxOffice();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return <MovieSwiper movies={weeklyBoxOffice} />;
};

export default WeeklyBoxOfficeSlider;
