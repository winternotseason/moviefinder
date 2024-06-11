import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import MovieTicketingnModal from "./Modal/MovieTicketingnModal";

const StyledDetailHeader = styled.header`
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
    top: 45rem;
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

const DetailHeader = ({ movie }) => {
  const [ticketingnModalOpen, setTicketingModalOpen] = useState(false);
  return (
    <StyledDetailHeader
      backdrop={`https://image.tmdb.org/t/p/w1280${movie.drop}`}
    >
      <div className="content">
        <h1>{movie.title}</h1>
        <div className="flex">
          <div className="btn">
            <button
              onClick={() => {
                setTicketingModalOpen(true);
              }}
            >
              바로예매
            </button>
            <button>관심영화</button>
          </div>
          <div className="dec">
            <p>{movie.dec} </p>
            <p className="sub">
              {movie.date && movie.date} | {movie.genre} | {movie.runtime}분 |{" "}
              {movie.actors &&
                Array.isArray(movie.actors) &&
                movie.actors.join(", ")}{" "}
              외
            </p>
          </div>
        </div>
      </div>
      <MovieTicketingnModal
        ticketingnModalOpen={ticketingnModalOpen}
        setTicketingModalOpen={setTicketingModalOpen}
        movie={movie}
      />
    </StyledDetailHeader>
  );
};

DetailHeader.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    dec: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    drop: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default DetailHeader;
