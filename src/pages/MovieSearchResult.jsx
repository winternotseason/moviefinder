import { useEffect } from "react";
import { getSearchMovies } from "../services/api";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import ResultsList from "../components/ResultsList";

const StyledSeacrhResult = styled.div`
  width: 100vw;
  margin-left: 26rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
  }
`;

const MovieSearchResult = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSearchMovies(query);
        setResults(res);
      } catch (err) {
        console.error(err);
      }
    };
    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <StyledSeacrhResult>
      <h1>검색 결과 : {query}</h1>
      <ResultsList results={results} />
    </StyledSeacrhResult>
  );
};

export default MovieSearchResult;
