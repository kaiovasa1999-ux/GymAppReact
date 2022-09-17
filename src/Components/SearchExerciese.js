import React,{useEffect,useState} from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { borderRadius, textTransform } from '@mui/material';
import { exerciseOptions,fetchData} from '../utils/fetchData'
import HorizontalScrollBarr from './HorizontalScrollBarr';

const SearchExerciese = () => {

  const [search,setSearch] = useState('');
  const [exercise,setExercises] = useState([])
  const [bodyParts,setBodyParts] = useState([]);
  useEffect (()=>{
    const fetchExercisesData= async () =>{
        const bodyPartData = 
                await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

        setBodyParts(['all',...bodyPartData]);
    }

    fetchExercisesData();
  },[])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        const searchExercises = exercisesData.fileter
                ((exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                ||  exercise.equipment.toLowerCase().includes(search)
                ||  exercise.bodyPart.toLowerCase().includes(search));

                setSearch('');
                setExercises(searchExercises);
            }
          
  };
  return (
    <Stack alignItems='center' mt='37px'
    justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{fontSize: {lg:'44px',xs:'30px'}}}
        mb='50px' textAlign='center'>
            Aweseom Exercises you should know
        </Typography>
        <Box position='relative' mb='72opx'>
            <TextField
            sx={{
                input:{fontWeight:'700', border: 'none', borderRadius: '4px'},
                width: {lg: '1000px', xs:'350px'},
                backgroundColor: '#fff' ,borderRadius:'40px'
            }}
            height ='70px'
            value={search}
            onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
            placeholder='Searche exercises'
            type ='text'
            />
            <Button className='search-btn'
            sx={{
                backgroundColor: '#ff2625',
                color: '#fff',
                textTransform: 'none',
                width: {lg:'150px', xs:'45px'},
                fontSieze: {lg:'20px',xs:'14px'},
                height:'55px',
                position:'absolute',
                right:'0'
            }}
            onClick={handleSearch}
            >Searche </Button>
        </Box>
        <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
            <HorizontalScrollBarr data={bodyParts} />
        </Box>
    </Stack>
  );
}

export default SearchExerciese;
