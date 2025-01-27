import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import './SigninForm.css';

const SigninForm = (props) => {
	const navigate = useNavigate();
	const [message, setMessage] = useState(['']);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const updateMessage = (msg) => {
		setMessage(msg);
	};

	const handleChange = (e) => {
		updateMessage('');
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await authService.signin(formData); // TODO build signin service function

			props.setUser(user);
			navigate('/');
		} catch (err) {
			updateMessage(err.message);
		}
	};

	return (
		<main className='container'>
			<section className='formSection'>
				<h1 className='formTitle1'>Login</h1>
				<form autoComplete='off' onSubmit={handleSubmit}>
					<div>
						<label htmlFor='email'>Username:</label>
						<input
							type='text'
							autoComplete='off'
							id='username'
							value={formData.username}
							name='username'
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor='password'>Password:</label>
						<input
							type='password'
							autoComplete='off'
							id='password'
							value={formData.password}
							name='password'
							onChange={handleChange}
						/>
					</div>
					<div className='form-sign'>
						<button>Log In</button>
						<Link to='/'>
							<button>Cancel</button>
						</Link>
					</div>
					<p className='signup-link'>
						Don't have an account? {''}
						<span>
							<Link to='/signup'>Sign up here</Link>
						</span>
					</p>
				</form>
			</section>
			<section className='videoSection'>
				<video className='video' autoPlay muted loop>
					<source src='/public/videos/superman12.mp4' />
				</video>
				<video className='video' autoPlay muted loop>
					<source src='/public/videos/ben_ten.mp4' />
				</video>
			</section>
		</main>
	);
};

export default SigninForm;
