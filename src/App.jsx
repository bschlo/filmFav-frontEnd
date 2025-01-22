import { createContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SigninForm from './components/SigninForm/SigninForm.jsx';
import SignupForm from './components/SignUpForm/SignUpForm.jsx';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import * as authService from '../src/services/authService';
import BaseLayout from './components/BaseLayout/BaseLayout.jsx';

export const AuthedUserContext = createContext(null);

const App = () => {
	const [user, setUser] = useState(authService.getUser());

	useEffect(() => {
		const loggedInUser = authService.getUser();
		if (loggedInUser) {
			setUser(loggedInUser);
		}
	}, []);

	const handleSignout = () => {
		authService.signout();
		setUser(null);
	};

	return (
		<>
			<NavBar user={user} />
			<div>
				<SigninForm />
			</div>
			<Routes>
				<Route element={<BaseLayout />}>
					{user ? (
						<Route path='/' element={<Dashboard />} />
					) : (
						<Route path='/' element={<Landing />} />
					)}
					<Route path='/signin' element={<SigninForm setUser={setUser} />} />
					<Route path='/signup' element={<SignupForm setUser={setUser} />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
