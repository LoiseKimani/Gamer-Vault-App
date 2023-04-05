import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
      });

      if (res.ok) {
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="container login__container">
      <div className="login__container-create">
        <div className="login__container-form">
          <form onSubmit={handleSubmit} className="form__container-group">
            <div className="form__container-title">
              <h3>Sign Up</h3>
            </div>
            <div className="login__input-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                id="username"
                placeholder="Enter Your Username"
                value={formData.username}
                required
              />
            </div>
            <div className="login__input-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                value={formData.email}
                required
              />
            </div>
            <div className="login__input-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                value={formData.password}
                required
              />
            </div>
            <div className="login__group-buttons">
              <button type="submit" className="btn">
                Sign Up
              </button>
              <Link to="/login" className="btn">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
