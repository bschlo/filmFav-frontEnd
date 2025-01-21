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
