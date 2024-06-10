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

export const getUpcomingMovies = async () => {
  const response = await tmdb.get("/movie/upcoming");
  return response.data.results;
};

export const getSearchMovies = async (word) => {
  const response = await tmdb.get("/search/movie", {
    params: {
      query: word,
    },
  });
  return response.data.results;
};

export const getMovieDetail = async (id) => {
  const response = await tmdb.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCredit = async (id) => {
  const response = await tmdb.get(`/movie/${id}/credits`);
  return response.data;
};