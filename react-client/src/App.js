import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import UserProfile from './pages/UserProfile';

const App = () => {
    const [currentUser, setCurrentUser] = useState({});
//   const attemptLogin = async (credentials) => {
//   };
   

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route
          path="/login"
          element={<LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
        />
        <Route path="/signup" element={<SignUpPage setCurrentUser={setCurrentUser} />} />
        <Route path="/profile/:profileID" element={<UserProfile />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

