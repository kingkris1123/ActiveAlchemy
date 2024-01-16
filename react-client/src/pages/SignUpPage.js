import React, { useState } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";

function SignUpPage() {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const outletContext = useOutletContext();
  const currentUser = outletContext?.currentUser || {};

  const handleChangeFirstName = (e) => setFirst_Name(e.target.value);
  const handleChangeLastName = (e) => setLast_Name(e.target.value);
  const handleChangeCity = (e) => setCity(e.target.value);
  const handleChangeState = (e) => setState(e.target.value);
  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  function handleFormSubmit(event) {
    event.preventDefault();
    attemptSignup({
      first_name,
      last_name,
      city,
      state,
      username,
      password,
    });
    navigate('/');
  }

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#3498db', // Blue color
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2980b9', // Darker blue on hover
  };

  const loginLinkStyle = {
    color: '#3498db',
    textDecoration: 'none',
  };

  const loginLinkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <form
        id="user-form"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          name="first_name"
          value={first_name}
          placeholder="First Name"
          onChange={handleChangeFirstName}
          style={inputStyle}
        />
        <input
          type="text"
          name="last_name"
          value={last_name}
          placeholder="Last Name"
          onChange={handleChangeLastName}
          style={inputStyle}
        />
        <input
          type="text"
          name="city"
          value={city}
          placeholder="City"
          onChange={handleChangeCity}
          style={inputStyle}
        />
        <input
          type="text"
          name="state"
          value={state}
          placeholder="State"
          onChange={handleChangeState}
          style={inputStyle}
        />
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChangeUsername}
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChangePassword}
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle })}
          onMouseOut={(e) => (e.currentTarget.style = buttonStyle)}
        >
          Sign Up
        </button>
      </form>
      <p>
        Already have a login? Login{" "}
        <Link
          to="/login"
          className="login-link"
          style={loginLinkStyle}
          onMouseOver={(e) => (e.currentTarget.style = { ...loginLinkStyle, ...loginLinkHoverStyle })}
          onMouseOut={(e) => (e.currentTarget.style = loginLinkStyle)}
        >
          here
        </Link>
      </p>
    </div>
  );
}

export default SignUpPage;

