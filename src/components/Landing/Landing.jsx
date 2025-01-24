import { Link } from 'react-router-dom';
import './Landing.css';
import '../../components/Footer/Footer';

const Landing = () => {
	return (
		<>
			<main>
				<img className='logo_page' src='/public/logo_page.png' alt='logo' />

				<h1>
					Welcome to FilmFav – Your Go-To Hub for Discovering and Sharing
					Movies!
				</h1>

				<h3>
					Explore cinema with FilmFav! <span />
					Create lists, discover trends, and connect with movie lovers.
					<br />
					<strong className='signup_link'>
						<Link to='/signup' style={{ color: 'white' }}>
							{' '}
							Sign Up
						</Link>
					</strong>
					<span> to make every movie moment unforgettable!</span>
				</h3>
				{/* <Footer /> */}
			</main>
		</>
	);
};

export default Landing;
