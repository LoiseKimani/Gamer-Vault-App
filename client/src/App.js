import React, { useState, useEffect } from "react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Reviews from "./Reviews";

function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/game_reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSignIn = (formData) => {
    fetch("/users/signin", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data.user))
      .catch((error) => console.error(error));
  };

  const handleSignOut = () => {
    fetch("/users/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => setUser(null))
      .catch((error) => console.error(error));
  };

  const getUserReviews = () => {
    if (user) {
      fetch(`http://localhost:4000/game_reviews?user_id=${user.id}`)
        .then((response) => response.json())
        .then((data) => setReviews(data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <SignOut setUser={setUser} handleSignOut={handleSignOut} />
          <button onClick={getUserReviews}>View Your Reviews</button>
        </div>
      ) : (
        <div>
          <h1>Sign In</h1>
          <SignIn handleSignIn={handleSignIn} />
        </div>
      )}
      <Reviews reviews={reviews} users={users} />
    </div>
  );
}

export default App;
