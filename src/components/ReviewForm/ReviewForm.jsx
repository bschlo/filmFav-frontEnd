import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import * as movieService from '../../services/movieService'
import './ReviewForm.css';



const ReviewForm = ({ handleAddReview}) => {
  const [formData, setFormData] = useState({ text: '', rating: 0 });
  const { reviewId, movieId} = useParams()
  const navigate = useNavigate()


  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (reviewId) {
      movieService.updateReview(reviewId, formData)
      navigate(`/movies/${movieId}`); 
      
    } else {
      handleAddReview(formData);
      setFormData({ text: '', rating: 0 }); 
    }
  };

  return (
    <div className='review-form'>
    <form onSubmit={handleSubmit}>
      <h1>{reviewId ? "Edit Review" : "Create Review"}</h1>
      <label htmlFor='text-input'>Your Review:</label>
      <div className='review-textarea'>
      <textarea
        required
        type='text'
        name='text'
        id='text-input'
        value={formData.text}
        onChange={handleChange}
      />
      </div>
      <label htmlFor='rating-input'>Rating (1-5):</label>
      <div className='rating-input'>
      <input
        required
        type='number'
        name='rating'
        id='rating-input'
        min='1'
        max='5'
        step='0.01'
        value={formData.rating}
        onChange={handleChange}
      />
      </div>
      <button type='submit' className='submit-review'>Submit Review</button>
    </form>
    </div>
  );
};

export default ReviewForm;
