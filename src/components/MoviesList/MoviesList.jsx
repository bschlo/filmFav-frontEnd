import { Link } from 'react-router';

const MoviesList = ({ movies = [] }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          {movie.title}
          <article>
            <h2>{movie.title}</h2>
            <img src={movie.poster_url} alt="poster_img" />
            <p>{movie.description}</p>
            <Link to={`/movies/${movie.id}`}>View Details</Link>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;