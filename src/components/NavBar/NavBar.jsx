import { useContext } from 'react';
import { AuthedUserContext } from '../../App';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ handleSignout }) => {
	const user = useContext(AuthedUserContext);

	return (
		<>
			{user ? (
				<nav className='navbar'>
					<ul className='nav-links'>
						<li>
							<Link to='/' className='nav-link'>
								<img
									src='https://github.com/bschlo/filmFav-frontEnd/blob/LandingPage/src/assets/Film%20Favorite.png?raw=true'
									alt='logo'
								/>
							</Link>
						</li>
						<li>
							<Link to='/movies' className='nav-link'>
								Movies
							</Link>
						</li>
						<li>
							<Link to='' onClick={handleSignout} className='nav-link'>
								Sign Out
							</Link>
						</li>
					</ul>
				</nav>
			) : (
				<nav className='navbar'>
					<ul className='nav-links'>
						<li>
							<Link to='/' className='nav-link'>
								<img
									src='https://github.com/bschlo/filmFav-frontEnd/blob/LandingPage/src/assets/Film%20Favorite.png?raw=true'
									alt='logo'
								/>
							</Link>
						</li>
						<div className='navbar-tab'>
							<li>
								<Link to='/signin' className='nav-link-signin'>
									Sign In
								</Link>
							</li>
							<li>
								<Link to='/signup' className='nav-link-signup'>
									Sign Up
								</Link>
							</li>
						</div>
					</ul>

					<div className='navbar-left'>
						<input
							type='text'
							placeholder='Search'
							className='search-bar-absolute'
						/>
					</div>
				</nav>
			)}
		</>
	);
};

export default NavBar;
