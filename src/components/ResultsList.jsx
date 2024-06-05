import PropTypes from "prop-types";
import styled from "styled-components";

const StyledListUl = styled.ul`
  list-style: none;
  img {
    margin-left: 3rem;
    width: 10rem;
    border-radius: 10px;
  }
  li {
    width: 50%;
    border-radius: 10px;
    padding: 2rem 1rem;
    margin-bottom: 2rem;
  }
`;

const ResultsList = ({ results }) => {
  return (
    <StyledListUl>
      {results.length > 0 ? (
        results.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            {movie.title} (발매 날짜: {movie.release_date})
          </li>
        ))
      ) : (
        <li>No results found</li>
      )}
    </StyledListUl>
  );
};

ResultsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResultsList;
