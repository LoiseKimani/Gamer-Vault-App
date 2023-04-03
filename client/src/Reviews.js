import React, { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>All Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.name}</h2>
          <p>{review.comment}</p>
          <p>{review.rating}</p>
          <p>{review.gameId}</p>
          <p>{review.image}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
