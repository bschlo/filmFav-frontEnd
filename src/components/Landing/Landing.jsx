import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
	return (
		<main>
            <div className='logo_page'>
			<img className='logo_page_img' src='/public/logo_page.png' alt='logo' />
            </div>
			<h1>
				Welcome to FilmFav – Your Go-To Hub for Discovering and Rating Movies!
			</h1>
			<br />

			<div className='video-row'>
				<video
					src='/public/videos/ben_ten.mp4'
					autoPlay
					loop
					muted
				/>
				<video
					src='/public/videos/transpormer.mp4'
					autoPlay
					loop
					muted
				/>
				<video src='/public/videos/topgun.mp4' autoPlay loop muted />
				<video src='/public/videos/sonic.mp4' autoPlay loop muted />
				<video
					src='/public/videos/superman12.mp4'
					autoPlay
					loop
					muted
				/>
				<video
					src='/public/videos/how_to_train_your_dragon.mp4'
					autoPlay
					loop
					muted
				/>
			</div>

			<h3>
				Explore cinema with FilmFav!
				<span />
				Create lists, discover trends, and connect with movie lovers.
				<br />
				<strong>
					<Link to='/signup' className='signup_link'>
						Sign Up
					</Link>
				</strong>
				<span> to make every movie moment unforgettable!</span>
			</h3>
		</main>
	);
};

export default Landing;