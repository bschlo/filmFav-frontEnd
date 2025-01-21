import { createContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SignupForm from './components/SignUpForm/SignUpForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SigninForm from './components/SignInForm/SigninForm';
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
			{/* <NavBar user={user} /> */}
			<Routes>
				<Route element={<BaseLayout />}>
					{user ? (
						<Route path='/' element={<Dashboard />} />
					) : (
						<Route path='/' element={<Landing />} />
					)}
					<Route path='/signup' element={<SignupForm setUser={setUser} />} />
					<Route path='/signin' element={<SigninForm setUser={setUser} />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
