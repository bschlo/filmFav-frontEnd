import { Link } from "react-router";
import React, { useState, useEffect } from 'react';
import * as mineService from "../../services/mineService";
import './WatchList.css';

const WatchList = () => {
  const [watchList, setwatchList] = useState({});
  useEffect(() => {
    fetchWatchList();
  }, []);
  const fetchWatchList = async () => {
    const res = await mineService.getWatchList();
    setwatchList(res.movies);
  };
 

    const removeFromMyWatchlist = async (movie_ids) => {
      try {
        const myWatchlistsData = await mineService.removeFromMyWatchlist(movie_ids);
        if (myWatchlistsData) {
          const movie_id = movie_ids[0];
          const myNewWatchList = watchList.filter((movie) => movie.id !== movie_id);
          setwatchList(myNewWatchList);
        }
      } catch (error) {
        console.error("Error removeFromMyMovies:", error);
      }
    };

  return (
    <ul className="watchlist">
      {watchList.length > 0 ? (
        watchList.map((movie) => (
          <li key={movie.id} className="watchlist-movie-card">
            <article className="watchlist-article">
              <Link to={`/movies/${movie.id}`} className="movie-link"><img src={movie.poster_url} alt="poster_img" className="watch-img" /></Link>
              <div>
                <button onClick={() => removeFromMyWatchlist([movie.id])} className="remove-btn">
                Remove From My To Watch List
                </button>
              </div>
            </article>
          </li>
        ))
      ) : (
        <p>My Watchlist Is Empty</p>
      )}
    </ul>
  );
};

export default WatchList;
