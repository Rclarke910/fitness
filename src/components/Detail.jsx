import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import { fontWeight } from '@mui/system'

const Detail = ( { exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

    const extraDetail = [
        {
            icon: '../assets/body-part.png',
            name: bodyPart
        },
        {
            icon: '../assets/target.png',
            name: target
        },
        {
            icon: '../assets/equipment.png',
            name: equipment
        },
    ]
  return (
    <Stack gap='60px' sx={{flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
            <Typography variant='h3' fontWeight='bolder'>
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong. <span style={{fontWeight: 'bolder'}}>{name} {` `}</span>
                is one of the best exercise to target your {target}. it will help you improve your mood and gain energy
            </Typography>
            {extraDetail.map((item) => (
                <Stack key = {item.name} direction='row' gap='24px' alignItems='center'>
                    <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                        <img src={item.icon} alt ={bodyPart} style={{ width: '50px', height: '50px'}}/>
                    </Button> 
                    <Typography textTransform = 'capitalize' variant='h5'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail