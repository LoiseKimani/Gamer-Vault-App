import React, { useState } from 'react';

function AddReview() {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setFormData({
          name: '',
          rating: '',
          comment: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddReview;
