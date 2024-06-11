import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import DetailHeader from "../components/DetailHeader";
import Loading from "../components/Loading";
import { getMovieCredit, getMovieDetail } from "../services/api";

const StyledDiv = styled.div`
  min-height: 80rem;
  box-sizing: border-box;
  margin-left: 22rem;
  img {
    margin: 5rem;
    border-radius: 10px;
    width: 25rem;
  }
`;

const DetailMovie = () => {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getMovieDetail(query);
        const credit = await getMovieCredit(query);
        const actors = credit.cast.map((actor) => actor.name);
        const movieObj = {
          title: res.title,
          dec: res.overview,
          date: res.release_date,
          poster: res.poster_path,
          drop: res.backdrop_path,
          genre: res.genres[0].name,
          runtime: res.runtime,
          actors: actors.slice(0, 5),
        };
        setMovie(movieObj);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchData();
    }
  }, [query]);
  if (loading) {
    return <Loading />;
  }
  return (
    <StyledDiv>
      <DetailHeader movie={movie} />
    </StyledDiv>
  );
};

export default DetailMovie;
