import React, { useState } from 'react'
import Box from '@mui/material/Box';
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcersises />
      <Excersises />
    </Box>
  )
}

export default Home