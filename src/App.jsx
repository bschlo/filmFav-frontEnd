import { createContext, useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SignupForm from "./components/SignUpForm/SignUpForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import SigninForm from "./components/SignInForm/SigninForm";
import * as authService from "../src/services/authService";
import { getUser } from "../src/services/authService";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import * as movieService from "./services/movieService";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import MyMovies from "./components/MyMovies/MyMovies";
import WatchList from "./components/WatchList/WatchList";
export const AuthedUserContext = createContext(null); // set the initial value of the context to null

const App = () => {
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice

  useEffect(() => {
    const loggedInUser = authService.getUser();
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await movieService.index();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchAllReviews = async () => {
      const reviews = await movieService.showAllReviews()
      setReviews(reviews)
    }
    fetchAllReviews()
  }, [])
  return (
    <AuthedUserContext.Provider value={user}>
      <NavBar handleSignout={handleSignout} />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Dashboard movies={movies} reviews={reviews}/>} />
            <Route path="/movies" element={<MoviesList movies={movies} />} />
            <Route path="/movies/:movieId" element={<MovieDetails user={user} />}/>
            <Route path="/movies/:movieId/reviews/:reviewId/edit" element={<ReviewForm />}
            />
            <Route path="/mymovies" element={<MyMovies />} />
            <Route path="/watchlist" element={<WatchList />} />

          </>
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
      </Routes>
    </AuthedUserContext.Provider>
  );
};

export default App;
