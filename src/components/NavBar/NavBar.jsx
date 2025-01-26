import { useState, useEffect, useContext } from 'react';
import { AuthedUserContext } from '../../App';
import { Link } from 'react-router-dom';

const NavBar = ({ handleSignout }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_SERVER_URL;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const user = useContext(AuthedUserContext);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLinkClick = () => {
    setSearchQuery(''); 
    setSearchResults([]);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }
      try {
        const response = await fetch(`${BACKEND_URL}/search/?query=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    const debounceTimeout = setTimeout(fetchSearchResults, 500);

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  return (
    <>
      {user ? (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
            <li><Link to="/myMovies">Watched Movies</Link></li>
            <li><Link to='/watchList'>To Watch List</Link></li>
            <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
          </ul>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search movies..."
          />

          {searchQuery && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map(movie => (
                    <li key={movie.id}>
                      <Link to={`/movies/${movie.id}`} onClick={handleLinkClick}>
                        {movie.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No results found</p>
              )}
            </div>
          )}
        </nav>
      ) : (
        <nav>
          <ul>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
