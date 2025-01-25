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
			<h1>Log in</h1>
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
						{/* <strong> */}
						<Link to='/signup'>Sign up here</Link>
						{/* </strong> */}
					</span>
				</p>
			</form>
		</main>
	);
};

export default SigninForm;
