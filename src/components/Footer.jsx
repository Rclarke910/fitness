import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor="#fff3f4">
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      <img src='../assets/Logo.png' alt='logo' width='70px' height='50px'/>
      <Typography variant='h7' pb='40px' mt='20px'>
        @ 2023 FitKit, Inc All Rights Reserved
      </Typography>
      </Stack>
    </Box>
  )
}

export default Footer