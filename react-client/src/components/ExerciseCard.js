import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography, Paper } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Paper
    elevation={3}
    sx={{
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}
  >
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ color: 'black', textDecoration: 'none', display: 'block', width: '100%' }}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{ width: '100%', height: 'auto' }} />
      <Stack
        direction="column"
        alignItems="stretch"
        padding="15px"
        bgcolor="#F8F8F8"
        borderBottomLeftRadius="20px"
        borderBottomRightRadius="20px"
      >
        <Stack direction="row" gap="10px" marginBottom="10px">
          <Button
            sx={{
              color: '#fff',
              background: '#FFA9A9',
              fontSize: '14px',
              borderRadius: '20px',
              textTransform: 'capitalize',
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              color: '#fff',
              background: '#FCC757',
              fontSize: '14px',
              borderRadius: '20px',
              textTransform: 'capitalize',
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography color="#000" fontWeight="bold" sx={{ fontSize: { lg: '20px', xs: '16px' } }} mt="11px" textTransform="capitalize">
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  </Paper>
);

export default ExerciseCard;
