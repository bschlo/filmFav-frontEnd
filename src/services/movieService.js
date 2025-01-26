const BASE_URL = `${import.meta.env.VITE_BACKEND_SERVER_URL}`;

const index = async () => {
  try {
    const res = await fetch(`${BASE_URL}/movies/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const show = async (movieId) => {
  try {
    const res = await fetch(`${BASE_URL}/movies/${movieId}/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    })
    return res.json ()
  } catch (error) {
    console.error(error)
  }
}

const showAllReviews = async () => {
  try {
    const res = await fetch(`${BASE_URL}/reviews/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    })
    console.log(res.json)
    return res.json ()
  } catch (error) {
    console.error(error)
  }
}

const createReview = async (movieId, reviewData) => {
  try {
    const res = await fetch(`${BASE_URL}/reviews/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: JSON.stringify({...reviewData, movie: movieId}),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const showReviews = async (movieId) => {
  try {
    const res = await fetch(`${BASE_URL}/reviews/movie/${movieId}/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const updateReview = async (reviewId, reviewData) => {
  try {
    const res = await fetch(`${BASE_URL}/reviews/${reviewId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: JSON.stringify(reviewData),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
}


const deleteReview = async (reviewId) => {
  try {
    await fetch(`${BASE_URL}/reviews/${reviewId}/`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    });
  } catch (error) {
    console.error('Error deleting a review:', error);
  }
};

const createComment = async (reviewId, commentFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/reviews/${reviewId}/comments/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...commentFormData, review: reviewId,}),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const showComments = async (reviewId) => {
  try {
    const res = await fetch(`${BASE_URL}/reviews/${reviewId}/comments/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    });
    
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const deleteComment = async (commentId) => {
  try {
    await fetch(`${BASE_URL}/comments/${commentId}/`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    });
  } catch (error) {
    console.error('Error deleting a comment:', error);
  }
};
const indexPagination = async (url) => {
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { 
  index,
  show,
  createReview,
  showAllReviews,
  showReviews,
  updateReview,
  deleteReview,
  createComment,
  showComments,
  deleteComment,
  indexPagination,
};