// // SignupForm.jsx

// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import * as authService from '../../services/authService';
// import './SignupForm.css';
// import '../../assets/logo_page.png';
// const SignupForm = (props) => {
// 	const navigate = useNavigate();
// 	const [message, setMessage] = useState(['']);
// 	const [formData, setFormData] = useState({
// 		username: '',
// 		password: '',
// 		passwordConf: '',
// 	});

// 	const updateMessage = (msg) => {
// 		setMessage(msg);
// 	};

// 	const handleChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const newUserResponse = await authService.signup(formData);
// 			props.setUser(newUserResponse.user);
// 			navigate('/signin');
// 		} catch (err) {
// 			updateMessage(err.message);
// 		}
// 	};

// 	const { username, password, passwordConf } = formData;

// 	const isFormInvalid = () => {
// 		return !(username && password && password === passwordConf);
// 	};

// 	return (
// 		<main>
// 			<section>
// 				<img
// 					src={'../../assets/logo_page.png'}
// 					alt='An owl sitting on a sign'
// 				/>
// 				{/* <video controls autoPlay muted loop>
// 					<source src='/public/videos/Intro.mp4' type='video/mp4' />
// 				</video> */}
// 			</section>
// 			<section>
// 				<h1>Sign Up</h1>
// 				<p>{message}</p>
// 				<form onSubmit={handleSubmit}>
// 					<div>
// 						<label htmlFor='username'>Username:</label>
// 						<input
// 							type='text'
// 							id='name'
// 							value={username}
// 							name='username'
// 							onChange={handleChange}
// 						/>
// 					</div>
// 					<div>
// 						<label htmlFor='password'>Password:</label>
// 						<input
// 							type='password'
// 							id='password'
// 							value={password}
// 							name='password'
// 							onChange={handleChange}
// 						/>
// 					</div>
// 					<div>
// 						<label htmlFor='confirm'>Confirm Password:</label>
// 						<input
// 							type='password'
// 							id='confirm'
// 							value={passwordConf}
// 							name='passwordConf'
// 							onChange={handleChange}
// 						/>
// 					</div>
// 					<div>
// 						<button disabled={isFormInvalid()}>Sign Up</button>
// 						<Link to='/'>
// 							<button>Cancel</button>
// 						</Link>
// 					</div>
// 				</form>
// 			</section>
// 		</main>
// 	);
// };

// export default SignupForm;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import './SignupForm.css';

const SignupForm = (props) => {
	const navigate = useNavigate();
	const [message, setMessage] = useState(['']);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		passwordConf: '',
	});

	const updateMessage = (msg) => {
		setMessage(msg);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const newUserResponse = await authService.signup(formData);
			props.setUser(newUserResponse.user);
			navigate('/signin');
		} catch (err) {
			updateMessage(err.message);
		}
	};

	const { username, password, passwordConf } = formData;

	const isFormInvalid = () => {
		return !(username && password && password === passwordConf);
	};

	return (
		<main className='container'>
			{/* Left Section: Video */}
			<section className='videoSection'>
				<video className='video' autoPlay muted loop>
					<source src='/public/videos/Top_gun_shorter.mp4' />
				</video>
				<video className='video' autoPlay muted loop>
					<source src='/public/videos/sonic.mp4' />
				</video>
			</section>

			{/* Right Section: Signup Form */}
			<section className='formSection'>
				{/* <h1>Sign Up</h1> */}
				<p>{message}</p>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='username'>Username:</label>
						<input
							type='text'
							id='name'
							value={username}
							name='username'
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor='password'>Password:</label>
						<input
							type='password'
							id='password'
							value={password}
							name='password'
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor='confirm'>Confirm Password:</label>
						<input
							type='password'
							id='confirm'
							value={passwordConf}
							name='passwordConf'
							onChange={handleChange}
						/>
					</div>
					<div>
						<button disabled={isFormInvalid()}>Sign Up</button>
						<Link to='/'>
							<button type='button'>Cancel</button>
						</Link>
					</div>
				</form>
			</section>
		</main>
	);
};

export default SignupForm;
