import React from 'react';
import './BaseLayout.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const BaseLayout = ({ children }) => {
	return (
		<div className='base-layout'>
			<Header />
			<main className='main-content'>{children}</main>
			<Footer />
		</div>
	);
};

export default BaseLayout;
