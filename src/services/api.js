import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "ko-KR",
    page: "1",
  },
});

export const getPopularMovies = async () => {
  const response = await tmdb.get("/movie/popular");
  return response.data.results;
};
