import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";

const PopularMovies = () => {
    const [movies, setMovies] = useState([]) // moivie 초기 값은 빈 배열
    useEffect(()=>{
        const fetchMovies = async () => {
            const movies = await getPopularMovies();
            setMovies(movies);
        }

        fetchMovies(); // 페이지가 처음 새로고침 될때만 인기 영화 목록을 불러옴
    }, [])
    return (
        <div>
            <h1>인기 영화</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default PopularMovies;