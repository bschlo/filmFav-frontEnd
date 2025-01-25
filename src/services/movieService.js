const BASE_URL = `${import.meta.env.VITE_BACKEND_SERVER_URL}/movies/`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const show = async (movieId) => {
  try {
    const res = await fetch(`${BASE_URL}${movieId}/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    })
    return res.json ()
  } catch (error) {
    console.error(error)
  }
}

export { 
  index,
  show,
};