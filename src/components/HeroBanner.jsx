import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material/';
const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'}, 
        ml: { sm: '50px'}
    }} position = 'relative' p='20px'>
        <Typography color = '#FF2625' fontSize = '26px' fontWeight = '600'>
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize: { lg: '44px', xs: '40px'}}}
        >
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' >
            Check out the most effective excersises
        </Typography>
        <Button href='#excersises' variant='contained' color='error'>Explor Excersises</Button>
        <img src='../assets/banner.png'/>
    </Box>
  )
}

export default HeroBanner