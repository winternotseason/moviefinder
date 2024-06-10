import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieDetail } from "../services/api";

const StyledDiv = styled.div`
  min-height: 100%;
  box-sizing: border-box;
  margin-left: 22rem;
`;

const StyledHeader = styled.header`
  height: 70rem;
  background-image: url(${(props) => props.backdrop});
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 22rem;
    width: 100%;
    height: 70rem;
    background-color: rgba(
      0,
      0,
      0,
      0.4
    ); /* 투명도 조절을 위해 alpha 값을 조절할 수 있습니다. */
  }
`;

const DetailMovie = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMovieDetail(query);
        console.log(res);
        const movieObj = {
          title: res.title,
          tag: res.tagline,
          dec: res.overview,
          popularity: res.popularity,
          date: res.release_date,
          poster: res.poster_path,
          drop: res.backdrop_path,
        };
        setMovie(movieObj);
      } catch (err) {
        console.error(err);
      }
    };
    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <StyledDiv>
      <StyledHeader
        backdrop_id={movie.drop}
        backdrop={`https://image.tmdb.org/t/p/w1280${movie.drop}`}
        poster={`https://image.tmdb.org/t/p/w500${movie.poster}`}
      ></StyledHeader>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} alt="p" />
      <h1>{movie.title}</h1> {movie.dec} <h3>{movie.tag && movie.tag}</h3>
    </StyledDiv>
  );
};

export default DetailMovie;
