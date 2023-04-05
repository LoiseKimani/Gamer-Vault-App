import React, { useState, useEffect } from 'react';

const ViewReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/gamereviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.name}</h3>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReviews;
