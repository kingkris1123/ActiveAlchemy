import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Banner from '../Images/banner.jpg';

const HeroBanner = () => (
  <Stack sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} direction={{ xs: 'column', md: 'row' }}>
    <Box p="20px" sx={{ flexGrow: 1 }}>
      <Typography color="primary" fontWeight="600" fontSize="26px">
        Active Alchemy
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '36px' } }} mb="23px" mt="30px" color="black">
        Unleash Your Potential <br />
        and Embrace the Grind
      </Typography>
      <Typography fontSize="18px" fontFamily="Alegreya" lineHeight="1.6" color="grey.700">
        Embark on Your Fitness Adventure with Customized Workouts
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: '45px',
            textDecoration: 'none',
            width: '200px',
            textAlign: 'center',
            background: '#FFD700', // Change to a more appealing color
            padding: '14px',
            fontSize: '20px',
            textTransform: 'uppercase',
            color: 'black',
            borderRadius: '4px',
            display: 'inline-block', // Ensure proper spacing
          }}
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography fontWeight={600} color="primary" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Fitness
      </Typography>
    </Box>
    <Box p="20px">
      <img
        src={Banner}
        alt="hero-banner"
        className="hero-banner-img"
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto',
          display: 'block',
          margin: 'auto',
          borderRadius: '10px', // Add a subtle border-radius for a nicer look
        }}
      />
    </Box>
  </Stack>
);

export default HeroBanner;





