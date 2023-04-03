import React from "react";

function SignOut({ setUser }) {
    const handleSignOut = () => {
      fetch('http://localhost:4000/users/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => setUser(null))
        .catch(error => console.error('Error signing out:', error));
    };
  
    return (
      <button onClick={handleSignOut}>Sign Out</button>
    );
  }

  export default SignOut;