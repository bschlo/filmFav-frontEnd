import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar.jsx';

const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>
				<img src='/src/assets/Film Favorite.png' alt='Logo' height='130' />
			</div>
			<div className='search-bar'>
				<input type='text' placeholder='Search...' />
			</div>
			<NavBar />
		</header>
	);
};

export default Header;
