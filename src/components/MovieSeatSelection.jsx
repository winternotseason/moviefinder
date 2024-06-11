import styled from "styled-components";
import PropTypes from "prop-types";

const SeatContainer = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  width: 80rem;
  height: 50rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

const SeatMap = styled.div`
margin-top:3rem;
  display: flex;
  justify-content: center;
  width: 60rem;
  height: 30rem;
  border: 1px solid gray;
  border-radius: 20px;
  p {
    margin-top: 1.2rem;
    font-size: 2rem;
    font-weight: 700;
    color: #616161;
  }
`;

const MovieSeatSelection = ({ movie }) => {
  return (
    <SeatContainer>
      <h1>바로예매 : {movie.title} </h1>
      <SeatMap>
        <p>Screen</p>
      </SeatMap>
    </SeatContainer>
  );
};

MovieSeatSelection.propTypes = {
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

export default MovieSeatSelection;
