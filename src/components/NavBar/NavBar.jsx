import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = ({ user }) => {
	return (
		<nav>
			<ul>
				{user ? (
					<>
						<li>
							<NavLink to='/'>Dashboard</NavLink>
						</li>
						<li>
							<NavLink to='/logout'>Logout</NavLink>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/signin'>Sign In</NavLink>
						</li>
						<li>
							<NavLink to='/signup'>Sign Up</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;

// // =================

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css';

// function Navbar({ user }) {
// 	const authenticatedOptions = (
// 		<>
// 			<NavLink className='nav-link' to='/movies'>
// 				Movies
// 			</NavLink>
// 			<NavLink className='nav-link' to='/user/myreviews'>
// 				My Reviews
// 			</NavLink>
// 			<NavLink className='nav-link' to='/user/mywatchlist'>
// 				My Watchlist
// 			</NavLink>
// 			<NavLink className='nav-link' to='/user/mymovies'>
// 				My Movies
// 			</NavLink>
// 			<NavLink className='nav-link' to='/sign-out'>
// 				Log Out
// 			</NavLink>
// 		</>
// 	);

// 	const unauthenticatedOptions = (
// 		<>
// 			<NavLink className='nav-link' to='/user/sign-in'>
// 				{/* Log-In */}
// 			</NavLink>
// 			<NavLink className='nav-link' to='/user/sign-up'>
// 				{/* SignUp */}
// 			</NavLink>
// 		</>
// 	);

// 	return (
// 		<nav>
// 			{/* <img src={headerLogo} alt='FilmFav Logo' /> */}
// 			{user && <div className='link welcome'>Welcome, {user.username}</div>}
// 			<div className='nav-links'>
// 				{user ? authenticatedOptions : unauthenticatedOptions}
// 			</div>
// 		</nav>
// 	);
// }

// export default NavBar;

// // src/components/NavBar/NavBar.jsx
// // import { useContext } from 'react';
// // import { AuthedUserContext } from '../../App';
// // import { Link } from 'react-router-dom';

// // const NavBar = ({ handleSignout}) => {

// //     const user = useContext(AuthedUserContext)

// //   return (
// //     <>
// //       { user ? (
// //         <nav>
// //           <ul>
// //             <li><Link to="/">Home</Link></li>
// //             <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
// //           </ul>
// //         </nav>
// //       ) : (
// //         <nav>
// //           <ul>
// //             <li><Link to="/signin">Sign In</Link></li>
// //             <li><Link to="/signup">Sign Up</Link></li>
// //           </ul>
// //         </nav>
// //       )}
// //     </>
// //   )
// // }

// // export default NavBar;
