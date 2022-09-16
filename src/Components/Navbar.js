import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import Logo from '../assets/images/Logo.png'


const Navbar = () => {
  return(
    <Stack>
      <Link>
        <img src={Logo}/>
      </Link>
    </Stack>
  )
}

export default Navbar;
