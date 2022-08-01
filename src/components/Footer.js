import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '58px', height: '58px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '15px' } }} mt="31px" textAlign="center" pb="20px">
      Alpha GYM <br />
      <a href="https://www.linkedin.com/in/biwek-dusadh-581961179/" target="_blank" rel="noopener noreferrer"> My Linked Profile</a>
      </Typography>
  </Box>
);

export default Footer;