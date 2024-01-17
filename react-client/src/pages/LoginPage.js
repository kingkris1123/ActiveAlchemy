// LoginPage.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const attemptLogin = async (credentials) => {
    try {
      console.log(credentials)
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const userData = await response.json();
        setCurrentUser(userData.user_data); // Update the current user state with user_data
        console.log("Login successful");

        // NOTE:  Now that we have login credentials for a user,
        //        we gotta SEND that to all components/pages that
        //        need the user creds. We'll do this using state
        //        (we're already saving the current user to state on
        //        Line 24). Once we have user data in state passed to 
        //        the exercises (and individual exercises), conditionally
        //        load a "Save to Favorites" button on an exercise's details
        //        page IF AND ONLY IF a user is currently logged in.q

        navigate('/');
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    attemptLogin({ username, password });
  };

  return (
    <>
      <form className="user-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handleChangeUsername}
          value={username}
          placeholder="Username..."
        />
        <input
          type="password"
          onChange={handleChangePassword}
          value={password}
          placeholder="Password..."
        />
        <button type="submit" value="Login">
          Login
        </button>
      </form>
      <div className="instring-button-container">
        <p>
          If you don't have a Login, please{" "}
          <Link to="/signup" className="instring-button">
            Signup
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;

