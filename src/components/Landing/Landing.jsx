import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './Landing.css';
import SignupForm from '../SignUpForm/SignUpForm.jsx';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
	const navigate = useNavigate();
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await axios.get('/api/movies');

				if (Array.isArray(response.data)) {
					setMovies(response.data);
				} else {
					throw new Error('Invalid data format: Expected an array');
				}
			} catch (error) {
				setError('Failed to fetch movies');
				console.error(error.message || error);
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;
	if (!movies.length) return <p>No movies available.</p>;

	return (
		<>
			<div className='landing-page'>
				<h1>Welcome to Our App</h1>
				<button onClick={() => navigate('/signup')}>Sign Up</button>
				{/* <button onClick={handleSignupClick}>Sign Up</button> */}
			</div>

			{/* <div className='main-content'>
				<h1 className='landing-header'>Movies</h1>
				<ul className='featured-movies'>
					{movies.map((movie) => (
						<li key={movie.id} className='movie-card'>
							{movie.title} ({movie.year}) - Rating: {movie.rating}
						</li>
					))}
				</ul>
			</div> */}
		</>
	);
};

export default LandingPage;
