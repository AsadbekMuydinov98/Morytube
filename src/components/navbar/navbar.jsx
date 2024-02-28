import React from 'react'
import {Box, Stack} from '@mui/material'
import morylogo from '../../constants/morylogo.png' 
import {colors} from '../../constants/colors'
import { Link } from 'react-router-dom'
import {SearchBar} from  '../'


const navbar = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={2} sx={{position:'sticky', top: 0, zIndex:999, background: colors.primary}}>
      <Link to='/'>
        <img src={morylogo} alt='logo' height={60} width={100}/>
      </Link>
      <SearchBar />
      <Box />
    </Stack> 
  )
}

export default navbar