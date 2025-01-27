
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import './signupForm.css'

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
			<h1 className='formTitle'>Sign Up</h1>
            <div className='signup-content'>
			<section className='videoSection'>
				<video className='video-signup' autoPlay muted loop>
					<source src='/public/videos/topgun.mp4' />
				</video>
				<video className='video-signup' autoPlay muted loop>
					<source src='/public/videos/sonic.mp4' />
				</video>
			</section>
			
			<section className='formSection'>
				<form onSubmit={handleSubmit} className='signup-form'>
					<div>
						<label htmlFor='username' className='username'>Username:</label>
						<input
							type='text'
							id='name'
							value={username}
							name='username'
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor='password' className='password'>Password:</label>
						<input
							type='password'
							id='password'
							value={password}
							name='password'
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor='confirm' className='confirm'>Confirm Password:</label>
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
            </div>
		</main>
	);
};

export default SignupForm;