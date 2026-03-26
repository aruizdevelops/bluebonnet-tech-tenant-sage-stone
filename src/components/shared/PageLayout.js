'use client';

import { Box } from '@mui/material';
import Navigation from '../landing/Navigation';
import Footer from '../landing/Footer';

export default function PageLayout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: '72px',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
