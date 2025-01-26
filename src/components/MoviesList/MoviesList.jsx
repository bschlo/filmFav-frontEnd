import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './MoviesList.css';
import * as movieService from "../../services/movieService";

const MoviesList = () => {
  const BASE_URL = `${import.meta.env.VITE_BACKEND_SERVER_URL}`;
  const [movies, setMovies] = useState([]);
  const [nextPage, setNextPage] = useState(null); 
  const [prevPage, setPrevPage] = useState(null); 

  const fetchMovies = async (url) => {
    try {
      const data = await movieService.indexPagination(url); 
      setMovies(data.results);
      setNextPage(data.next);  
      setPrevPage(data.previous);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(`${BASE_URL}/movies/?page=1`);
  }, []);

  const handleNext = () => {
    if (nextPage) {
      fetchMovies(nextPage);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (prevPage) {
      fetchMovies(prevPage); 
      window.scrollTo(0, 0); 
    }
  };

  return (
    <main>
    <ul className="movies-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <article>
              <Link to={`/movies/${movie.id}`} className="movie-link">
                <img
                  src={movie.poster_url}
                  alt="poster_img"
                  className="img"
                />
              </Link>
            </article>
          </li>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </ul>

    {/* 当 movies 不为空时，显示分页按钮 */}
    {movies.length > 0 && (
      <div className="pagination">
        <button onClick={handlePrev} disabled={!prevPage}>
          Prev
        </button>
        <button onClick={handleNext} disabled={!nextPage}>
          Next
        </button>
      </div>
    )}
  </main>
  );
};

export default MoviesList;