import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
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
  .content {
    color: #ffffff;
    position: relative;
    z-index: 10;
    top: 48rem;
    h1,
    p {
      margin: 0;
    }
    h1 {
      font-size: 5rem;
      padding: 0 5rem;
    }

    .flex {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      .btn {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-left: 5rem;
        button {
          background-color: white;
          font-size: 1.3rem;
          border: 1px solid black;
          width: 18rem;
          height: 4rem;
          margin: 0.1rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .dec {
        .sub {
          margin-top: 1rem;
        }
        p {
          font-weight: 400;
          font-size: 1.1rem;
          margin-left: 2rem;
          margin-right: 5rem;
        }
      }
    }
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
        const credit = await getMovieCredit(query);
        const actors = credit.cast.map((actor) => actor.name);
        const movieObj = {
          title: res.title,
          dec: res.overview,
          popularity: res.popularity,
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
      >
        <div className="content">
          <h1>{movie.title}</h1>
          <div className="flex">
            <div className="btn">
              <button>바로예매</button>
              <button>관심영화</button>
            </div>
            <div className="dec">
              <p>{movie.dec} </p>
              <p className="sub">
                {movie.date && movie.date.slice(0, 4)} | {movie.genre} |{" "}
                {movie.runtime}분 | {movie.actors && movie.actors.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </StyledHeader>
    </StyledDiv>
  );
};

export default DetailMovie;
