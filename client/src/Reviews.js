import React, { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id}>
          {review.image && <img src={review.image} alt={review.name} />}
          <h3>{review.name}</h3>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
