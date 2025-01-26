import React, { useEffect, useState } from 'react';
import './IntroAnimation.css';

const IntroAnimation = ({ onFinish }) => {
	const [showTiles, setShowTiles] = useState(false);

	useEffect(() => {
		const videoDuration = 13000;
		const timer = setTimeout(() => {
			setShowTiles(true);
			onFinish();
		}, videoDuration);

		return () => clearTimeout(timer);
	}, [onFinish]);

	return (
		<div className='intro-container'>
			{!showTiles ? (
				<video
					src='/videos/Intro.mp4'
					autoPlay
					muted
					className='intro-video'
					onError={(e) => console.error('Video failed to load', e)}
				/>
			) : (
				<div className='tile-grid'>
					{[...Array(9)].map((_, index) => (
						<div key={index} className='tile'></div>
					))}
				</div>
			)}
		</div>
	);
};

export default IntroAnimation;
