import React, { useState } from 'react';

const AddReview = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/game_reviews/add_reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      setFormData({
        image: '',
        name: '',
        rating: '',
        comment: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Post a Review</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
