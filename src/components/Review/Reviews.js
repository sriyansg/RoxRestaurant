import React from 'react';
import avatar from '../../assets/avatar.png';
import './Review.scss';

const Reviews = ({ reviewsData }) => {
  return (
    <div className='review'>
      <h1>Reviews</h1>

      {/* Display reviews */}
      {reviewsData.map((review, index) => (
        <div className='review-card' key={index}>
          <img src={avatar} alt='user' />
          <h2>{review.customer_name}</h2>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
