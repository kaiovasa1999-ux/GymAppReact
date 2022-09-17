import React from 'react';
import { Box } from '@mui/material';
import Exercises from '../Components/Exercises';
import HeroBanner from '../Components/HeroBanner';
import SearchExerciese from '../Components/SearchExerciese';

const Home = () => {
  return (
   <Box>
      <HeroBanner />
      <SearchExerciese />
      <Exercises />
   </Box>
  );
}

export default Home;
