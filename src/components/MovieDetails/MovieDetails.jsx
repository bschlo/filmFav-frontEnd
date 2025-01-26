import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import * as movieService from "../../services/movieService";
import ReviewForm from "../ReviewForm/ReviewForm";
import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import "./MovieDetails.css";
import * as mineService from "../../services/mineService";

import CommentForm from "../CommentForm/CommentForm";

const MovieDetails = () => {
  const user = useContext(AuthedUserContext);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [comments, setComments] = useState({});
  const [toggle, setToggle] = useState(false);
  console.log(reviews)

  const fetchMovie = async () => {
    try {
      const movieData = await movieService.show(movieId);
      setMovie(movieData);
    } catch (err) {
      console.error("Error fetching movie:", err);
    }
  };

  const fetchReviews = async () => {
    try {
      const reviewsData = await movieService.showReviews(movieId);
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", err);
    }
  };
  const fetchComments = async (reviewId) => {
    try {
      const commentsData = await movieService.showComments(reviewId);
      setComments((prevComments) => ({
        ...prevComments,
        [reviewId]: commentsData, // Store comments for the specific reviewId
      }));
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  const addToMyMovies = async (movie_ids) => {
    try {
      const myMoviesData = await mineService.addToMyMovies(movie_ids);
      alert(myMoviesData.detail)
      return;
    } catch (error) {
      console.error("Error addToMyMovies:", error);
    }
  };
  const addToMyWatchlist = async (movie_ids) => {
    try {
      const myWatchlistData = await mineService.addToMyWatchlist(movie_ids);
      alert(myWatchlistData.detail)
      return;
    } catch (error) {
      console.error("Error addToMyMovies:", error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    fetchReviews();
  }, [movieId, toggle]);

  useEffect(() => {
    if (reviews) {
      reviews.forEach((review) => {
        fetchComments(review.id); // Fetch comments for each review
      });
    }
  }, [reviews, toggle]);

  const handleAddReview = async (reviewFormData) => {
    try {
      await movieService.createReview(movieId, reviewFormData);
      setToggle((prev) => !prev);
    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await movieService.deleteReview(reviewId);
      setToggle((prev) => !prev);
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  const handleUpdateReview = async (reviewId, reviewFormData) => {
    try {
      await movieService.updateReview(reviewId, reviewFormData);
      setToggle((prev) => !prev);
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  const handleAddComment = async (reviewId, commentFormData) => {
    try {
      await movieService.createComment(reviewId, commentFormData);
      setToggle((prev) => !prev);
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await movieService.deleteComment(commentId);
      setToggle((prev) => !prev);
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  if (!movie) {
    return (
      <main>
        <h1>Movie Details</h1>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main key={movie.id}>
      <div className="intro">
        <img src={movie.poster_url} alt={`${movie.title} Poster`} />
        <div>
            <button onClick={() => addToMyMovies([movie.id])}>
            Mark As Watched
            </button>
            <button onClick={() => addToMyWatchlist([movie.id])}>
              Add To My Watchlist
            </button>
          </div>
        <div className="movie-details">
          <div className="movie-title">{movie.title}</div>
          <div className="description">{movie.description}</div>
          <div className="release-year">
            Movie Released in {movie.year_made}
          </div>
          <div className="genres">
            {movie.genres.map((genre) => (
              <div key={genre.id} className="genre">
                {" "}
                {genre.name}{" "}
              </div>
            ))}
          </div>
          <div className="movie-rating">
            {!reviews?.length ? (
              <div>No Reviews Yet</div>
            ) : (
              <div>
                FilmFav User Rating:{" "}
                {(() => {
                  let sum = 0;
                  for (let i = 0; i < reviews.length; i++) {
                    const rating = parseFloat(reviews[i].rating);
                    sum += rating;
                  }
                  return (sum / reviews.length).toFixed(2) + " Out of 5.00"
                })()}
                </div>
            )}
          </div>
        </div>
      </div>
      <div className="reviews-title">Reviews</div>

      <div className="review-form">
      <ReviewForm
        handleAddReview={handleAddReview}
        handleUpdateReview={handleUpdateReview}
        
      />
      </div>
        <div className="reviews">
          {!reviews?.length && <div>No reviews yet</div>}
          {reviews?.map((review, index) => (
            <div key={`${review.id}-${index}`} className="reviews-comments">
              <div className="review-content">
                <div className="review-header">
                  <div className="user-rating">
                    {review.username
                      ? `${review.username} rated this movie a ${review.rating} out of 5.00`
                      : "Anonymous"}
                  </div>
                  <div className="dashboard-dap"></div>
                  <div className="posted-date">
                    {`Posted on: ${new Date(
                      review.created_at
                    ).toLocaleDateString()}`}
                  </div>
                </div>
                {review.username === user && (
                  <>
                    <Link to={`/movies/${movie.id}/reviews/${review.id}/edit`}>
                      Edit Review
                    </Link>
                    <button onClick={() => handleDeleteReview(review.id)}>
                      Delete Review
                    </button>
                  </>
                )}
                <div>{review.text}</div>
              </div>
              <div>
                <div className="comments-label">Comments:</div>
                <CommentForm
                  handleAddComment={(commentData) =>
                    handleAddComment(review.id, commentData)
                  }
                />
                {comments[review.id] && comments[review.id].length === 0 && (
                  <div>There are no comments.</div>
                )}
                {comments[review.id]?.map((comment) => (
                  <div key={`${comment.id}-${index}`}>
                    <div>
                      <div>
                        <div className="comment-details">
                          <div className="comment-user">
                            {comment.username
                              ? `${comment.username} posted on: ${new Date(
                                  comment.created_at
                                ).toLocaleDateString()}`
                              : "Anonymous"}
                          </div>
                          <div>{comment.text}</div>
                        </div>
                      </div>
                    </div>
                    {comment.username === user && (
                      <>
                        <button onClick={() => handleDeleteComment(comment.id)} className="delete-comment-btn">
                          Delete Comment
                        </button>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </main>
  );
};

export default MovieDetails;
