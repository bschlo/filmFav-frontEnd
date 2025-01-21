import { useContext } from 'react';
import { AuthedUserContext } from '../../App';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);

  return (
    <>
      {user ? (
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/" className="nav-link"><img src="https://github.com/bschlo/filmFav-frontEnd/blob/LandingPage/src/assets/Film%20Favorite.png?raw=true" alt="logo" /></Link></li>
            <li><Link to="/movies" className="nav-link">Movies</Link></li>
            <li><Link to="" onClick={handleSignout} className="nav-link">Sign Out</Link></li>
          </ul>
        </nav>
      ) : (
        <nav className="navbar">
          <ul className="nav-links">
          <li><Link to="/" className="nav-link"><img src="https://github.com/bschlo/filmFav-frontEnd/blob/LandingPage/src/assets/Film%20Favorite.png?raw=true" alt="logo" /></Link></li>
            <li><Link to="/signin" className="nav-link">Sign In</Link></li>
            <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;

