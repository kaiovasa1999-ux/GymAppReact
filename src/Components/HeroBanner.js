import React from 'react';
import {Box,Stack,Typography,Button} from '@mui/material'
import Banner from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
   <Box sx={{
    mt: {lg: '212px', xs:'70px'},
    ml: {sm: '50px'}
   }} position='relative' p='20px'>
        <Typography 
            color='#FF2626' fontWeight='600' fontSize='20px'>Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg: '44px', xs:'40px'}}} mb='23px' mt='30px'>
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='32px' mb={4}>
            Check out the most efective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises' 
        sx={{
            backgroundColor:'#ff2625',padding: '11px'
        }}>
            Explore Exercises
        </Button>
        <Typography
          fontWeight={600} 
          color='#ff2625' 
          sx={{
            opasity: 0.1,
            display: {lg: 'block',xs: 'none'}
        }} 
        fontSize='100px'
        >
            Exercises
        </Typography>
        <img src={Banner} alt="banner" className='hero-banner-img'/>
   </Box>
  );
}

export default HeroBanner;
