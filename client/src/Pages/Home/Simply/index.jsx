import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Simply() {
  return (
    <Box sx={{
        display :'flex' ,
        justifyContent : 'space-between',
        alignItems : 'center' ,
        marginBottom:'48px',

    }}>
      <Typography component={'h2'} variant='h1'>
        Simply Unique <br/> Simply Better
      </Typography>
      <Typography sx={{fontWeight:'bold', opacity:'0.5'}}>3legant is a gift & decorations store based in HCMC,<br/> Vietnam. Est since 2019. </Typography>
    </Box>
  )
}
