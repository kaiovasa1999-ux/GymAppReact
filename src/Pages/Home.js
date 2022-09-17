import React, {useState} from 'react';
import { Box } from '@mui/material';
import Exercises from '../Components/Exercises';
import HeroBanner from '../Components/HeroBanner';
import SearchExerciese from '../Components/SearchExerciese';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExerciese setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
