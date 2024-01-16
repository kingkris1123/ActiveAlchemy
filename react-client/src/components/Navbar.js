import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Logo from '../Images/Logo.png';

const styles = {
    navContainer: {
      backgroundColor: 'linear-gradient(45deg, #FFD700, #FFA500)', // Replace with your desired background color
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    activeLink: {
      borderBottom: '3px solid blue', // Change the border bottom color to blue
      paddingBottom: '2px',
      margin: '0 10px',
      fontWeight: 'bold',
    },
    navLink: {
      textDecoration: 'none',
      color: '#542B0E', // Replace with your desired default link color
      transition: 'color 0.3s',
      '&:hover': {
        color: '#FF5733', // Replace with your desired link color on hover
      },
    },
    logo: {
      width: '80px',
      height: '80px',
      margin: '0 20px',
    },
  };
  
  const Navbar = () => (
    <Stack
      direction={{ sm: 'row', xs: 'column' }}
      justifyContent={{ sm: 'space-around', xs: 'center' }}
      sx={styles.navContainer}
    >
      <img src={Logo} alt="logo" style={styles.logo} />
  
      <NavLink to="/" style={{ ...styles.navLink, ...styles.activeLink }}>
        <Typography variant="subtitle1">Home</Typography>
      </NavLink>
      <NavLink to="/exercises" style={{ ...styles.navLink, ...styles.activeLink }}>
        <Typography variant="subtitle1">Exercises</Typography>
      </NavLink>
      <NavLink to="/signup" style={{ ...styles.navLink, ...styles.activeLink }}>
        <Typography variant="subtitle1">Signup</Typography>
      </NavLink>
      <NavLink to="/login" style={{ ...styles.navLink, ...styles.activeLink }}>
        <Typography variant="subtitle1">Login</Typography>
      </NavLink>
      <NavLink to="/profile/:profileID" style={{ ...styles.navLink, ...styles.activeLink }}>
        <Typography variant="subtitle1">Profile</Typography>
      </NavLink>
    </Stack>
  );
  
  export default Navbar;
  





