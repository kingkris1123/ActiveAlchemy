import React from 'react';
import { Stack, Typography } from '@mui/material';
import Gym from '../Images/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    component="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      background: '#fff',
      borderRadius: '20px',
      width: '270px',
      height: '282px',
      cursor: 'pointer',
      gap: '20px',
      p: '20px',
      border: bodyPart === item ? '4px solid #FFD700' : 'none', // Change the border color to yellow (#FFD700)
      transition: 'border 0.3s ease-in-out',
      '&:hover': {
        border: '4px solid #FFD700', // Change the border color to yellow on hover
      },
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Gym} alt="dumbbell" style={{ width: '60px', height: '60px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;

