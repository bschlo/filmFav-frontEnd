import { Link } from "react-router";
import "./Dashboard.css";

const Dashboard = ({ movies, reviews }) => {
  const user = localStorage.getItem("user");
  const movieArray = Array.isArray(movies) ? movies : movies?.results || [];
  const reviewArray = reviews
    
  
  const topMovies = movieArray
    .filter((movie) => movie.average_rating !== undefined && movie.average_rating >= 1)
    .sort((a, b) => b.average_rating - a.average_rating)
    .slice(0, 5);

  const lowestMovies = movieArray
    .filter((movie) => movie.average_rating !== undefined && movie.average_rating >= 1)
    .sort((a, b) => a.average_rating - b.average_rating)
    .slice(0, 5);
   
  const mostReviewedMovies = movieArray.map((movie)=> {
    const reviewCount = reviewArray.filter((review) => review.movie === movie.id).length
    return {...movie, reviewCount}
  })
    .filter((movie) => movie.reviewCount > 0)
    .sort((a,b) => b.reviewCount - a.reviewCount)
    .slice(0,5)

    const getLastReview = (movieId) => {
        const movieReviews = reviewArray
        .filter((review) => review.movie === movieId)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        if (movieReviews.length === 0) {
            return "No Reviews Yet.";
        }
        const latestReview = movieReviews[0];
        console.log(movieReviews)
        return `${latestReview.username} said "${latestReview.text}"`;
        
    };

  return (
    <main className="dashboard">
      <div className="dashboard-message">
        <div className="dashboard-welcome">Welcome to FilmFav, {user}</div>
        <div className="dashboard-gap"></div>
        <div className="dashboard-about">
          Review and rate the latest movies out now!
        </div>
      </div>
      <div className="content-container">
      <div className="rated-content">
        <div className="rated-message">Top 5 Rated Movies Today</div>
        <div className="rated-list">
          {topMovies.length > 0 ? (
            topMovies.map((movie) => (
              <div key={movie.id} className="rated-card">
                <div className="rated-average">{movie.average_rating ? movie.average_rating.toFixed(2) + " / 5.00" : "N/A" } </div>
                <div className="latest-review">{getLastReview(movie.id)}</div>
                <div>
                  <Link to={`/movies/${movie.id}`} className="movie-link">
                    <img
                      src={movie.poster_url}
                      alt="poster_img"
                      className="rated-image"
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No movies available</div>
          )}
        </div>
      </div>
      <div className="rated-content">
        <div className="rated-message">Most Reviewed Movies Today</div>
        <div className="rated-list">
          {mostReviewedMovies.length > 0 ? (
            mostReviewedMovies.map((movie) => (
              <div key={movie.id} className="rated-card">
                <div className="rated-average">{movie.reviewCount} Review{movie.reviewCount > 1 ? "s": "" } </div>
                <div className="latest-review">{getLastReview(movie.id)}</div>
                <div>
                  <Link to={`/movies/${movie.id}`} className="movie-link">
                    <img
                      src={movie.poster_url}
                      alt="poster_img"
                      className="rated-image"
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No movies available</div>
          )}
        </div>
      </div>
      <div className="rated-content">
        <div className="rated-message">Lowest 5 Rated Movies Today</div>
        <div className="rated-list">
          {lowestMovies.length > 0 ? (
            lowestMovies.map((movie) => (
              <div key={movie.id} className="rated-card">
                <div className="rated-average">{movie.average_rating ? movie.average_rating.toFixed(2) + " / 5.00" : "N/A" }</div>
                <div className="latest-review">{getLastReview(movie.id)}</div>
                <div>
                  <Link to={`/movies/${movie.id}`} className="movie-link">
                    <img
                      src={movie.poster_url}
                      alt="poster_img"
                      className="rated-image"
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No movies available</div>
          )}
        </div>
      </div>
      </div>
    </main>
  );
};

export default Dashboard;
