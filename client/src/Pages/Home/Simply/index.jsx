import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Simply() {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'center', sm: 'space-between' },
        alignItems: { xs: 'center', sm: 'center' },
        marginBottom: { xs: '32px', sm: '40px', md: '48px' },
        px: { xs: '16px', sm: '32px', md: '64px', lg: '132px' },
        gap: { xs: '24px', sm: '32px', md: '0px' },
        width: '100%',
        textAlign: { xs: 'center', sm: 'left' },
    }}>
      <Typography 
        component={'h2'} 
        variant="h1"
        sx={{
          fontWeight: 'bold',
          fontSize: { 
            xs: '2rem',    // h3 size on mobile
            sm: '2.5rem',  // h2 size on tablet
            md: '3rem',    // h1 size on desktop
          },
          lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
          mb: { xs: 2, sm: 0 },
        }}
      >
        Simply Unique <br/> Simply Better
      </Typography>
      <Typography 
        sx={{
          fontWeight: 'bold', 
          opacity: '0.5',
          fontSize: { 
            xs: '0.875rem', // 14px on mobile
            sm: '1rem',     // 16px on tablet and desktop
          },
          lineHeight: 1.6,
          maxWidth: { xs: '100%', sm: '80%', md: '50%' },
        }}
      >
        3legant is a gift & decorations store based in HCMC,<br/> Vietnam. Est since 2019.
      </Typography>
    </Box>
  )
}