import { Link } from 'react-router-dom';
import './Landing.css';
import './Landing.css';

const Landing = () => {
	return (
		<main>
			<img className='logo_page' src='/public/logo_page.png' alt='logo' />

			<h1>
				Welcome to FilmFav – Your Go-To Hub for Discovering and Sharing Movies!
			</h1>
			<br />

			<div className='video-row'>
				<video
					src='/public/videos/compressed_BEN 10 Live Action Movie – First Trailer   Tom Holland   Netflix (4K).mp4'
					autoPlay
					loop
					muted
				/>
				<video
					src='/public/videos/compressed_Optimus vs Bumble.mp4'
					autoPlay
					loop
					muted
				/>
				<video src='/public/videos/compressed_topgun.mp4' autoPlay loop muted />
				<video src='/public/videos/compressed_Sonic3.mp4' autoPlay loop muted />
				<video
					src='/public/videos/compressed_Superman12.mp4'
					autoPlay
					loop
					muted
				/>
				<video
					src='/public/videos/compressed_Transpor_shorter.mp4'
					autoPlay
					loop
					muted
				/>
				<video
					src='/public/videos/compressed_How To Train Your Dragon   Official Teaser Trailer.mp4'
					autoPlay
					loop
					muted
				/>
			</div>

			<h3>
				Explore cinema with FilmFav! <span />
				Create lists, discover trends, and connect with movie lovers.
				<br />
				<strong className='signup_link'>
					<Link to='/signup'>
						{' '}
						<span className='span-signup'>Sign Up</span>
					</Link>
				</strong>
				<span> to make every movie moment unforgettable!</span>
			</h3>
		</main>
	);
};

export default Landing;
