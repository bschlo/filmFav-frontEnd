import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as movieService from "../../services/movieService";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
 

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await movieService.show(movieId);
      setMovie(movieData);
    };
    fetchMovie();
  }, [movieId]);


  if (!movie) {
    return (
      <main>
        <h1>Movie Details</h1>
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <main>
      Movie Details
      <li key={movie.id}>
        {movie.title}
        <article>
          <h2>{movie.title}</h2>
          <img src={movie.poster_url} alt="poster_img" />
          <p>{movie.description}</p>
        </article>
      </li>
    </main>
  );
};

export default MovieDetails;
