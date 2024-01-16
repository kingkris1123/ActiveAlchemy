import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../Images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#F8F8F8" py="40px" textAlign="center">
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap">
      <img
        src={Logo}
        alt="logo"
        style={{
          width: '200px',
          height: 'auto',
          maxHeight: '50px',
          display: 'block',
          margin: 'auto',
        }}
      />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '24px', xs: '18px' }, color: '#666' }} mt="20px" pb="20px">
      Made with ❤️ by Kristian Guzman
    </Typography>
    {/* Add social media links or contact information here if desired */}
  </Box>
);

export default Footer;


