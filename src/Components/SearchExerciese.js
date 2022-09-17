import React,{useEffect,useState} from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { borderRadius, textTransform } from '@mui/material';
import { exerciseOptions,fetchData} from '../utils/fetchData'


const SearchExerciese = () => {

  const [search,setSearch] = useState('');
  
  const handleSearch = async () =>{
    if(search){
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises'
        ,exerciseOptions);

        console.log(exercisesData)
    }
  }
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
    </Stack>
  );
}

export default SearchExerciese;
