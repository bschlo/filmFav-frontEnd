import { Link, useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import * as mineService from "../../services/mineService";
import './MyMovies.css'

const MyMovies = () => {
  const [myMovies, setmyMovies] = useState({});
  useEffect(() => {
    fetchMyMovies();
  }, []);
  const fetchMyMovies = async () => {
    const res = await mineService.getMyMovies();
    setmyMovies(res.movies);
  };

  const removeFromMyMovies = async (movie_ids) => {
    try {
      const myMoviesData = await mineService.removeFromMyMovies(movie_ids);
      if (myMoviesData) {
        const movie_id = movie_ids[0];
        const myNewMovies = myMovies.filter((movie) => movie.id !== movie_id);
        setmyMovies(myNewMovies);
      }
    } catch (error) {
      console.error("Error removeFromMyMovies:", error);
    }
  };

  return (
    <ul className="mymovies">
      {myMovies.length > 0 ? (
        myMovies.map((movie) => (
          <li key={movie.id} className="mymovies-card">
            <article>
              <Link to={`/movies/${movie.id}`} className="mymovies-link"><img src={movie.poster_url} alt="poster_img" className="mymovies-img" /></Link>
              <div>
                <button onClick={() => removeFromMyMovies([movie.id])} className="mymovies-btn">
                  Remove From My Watched Movies
                </button>
              </div>
            </article>
          </li>
        ))
      ) : (
        <p>my movies cart is empty</p>
      )}
    </ul>
  );
};

export default MyMovies;




