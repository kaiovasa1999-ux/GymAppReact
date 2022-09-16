import React from 'react';
import {Route,Routes} from'react-router-dom'
import { Box } from '@mui/material';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';


const App = () => {
  return (
    <Box width="400px">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
