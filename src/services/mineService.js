const BASE_URL = `${import.meta.env.VITE_BACKEND_SERVER_URL}`;

const getMyMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}/mymovies/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const addToMyMovies = async (movie_ids,myMoviesData) => {
  try {
    const res = await fetch(`${BASE_URL}/mymovies/add/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: JSON.stringify({...myMoviesData,movie_ids}),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
const getWatchList = async () => {
  try {
    const res = await fetch(`${BASE_URL}/watchlist/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const addToMyWatchlist = async (movie_ids,myWatchListData) => {
  try {
    const res = await fetch(`${BASE_URL}/watchlist/add/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: JSON.stringify({...myWatchListData,movie_ids}),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const removeFromMyMovies = async (movie_ids,myMoviesData) => {
  try {
    const res = await fetch(`${BASE_URL}/mymovies/remove/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: JSON.stringify({...myMoviesData,movie_ids}),
    });
    if(res.ok){
      const responseData = await res.json();
      return responseData;
    }else{
      console.error("Request failed with status:", res.status);
      return null;
    }
    
  } catch (error) {
    console.error(error);
  }
};

const removeFromMyWatchlist = async (movie_ids,myWatchlistsData) => {
  try {
    const res = await fetch(`${BASE_URL}/watchlist/remove/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: JSON.stringify({...myWatchlistsData,movie_ids}),
    });
    if(res.ok){
      const responseData = await res.json();
      return responseData;
    }else{
      console.error("Request failed with status:", res.status);
      return null;
    }
    
  } catch (error) {
    console.error(error);
  }
};



















export { 
  getMyMovies,
  getWatchList,
  addToMyMovies,
  addToMyWatchlist,
  removeFromMyMovies,
  removeFromMyWatchlist
};