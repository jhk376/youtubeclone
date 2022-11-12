import React,{useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'

import {Sidebar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);//q=queries
  },[selectedCategory]);

  return (
    <Stack sx ={{ flexDirection: {sx:  'column', md:"row"} }}>
      <Box sx ={{ height: {sx:'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px:{ sx:0, md:2} }}> {/*px is padding */}
      <Sidebar 
       selectedCategory = {selectedCategory}
       setselectedCategory = {setselectedCategory} />
      <Typography className = 'copyright' variant = 'body2' sx={{ mt:1.5, color:'#fff'}}>
        CopyRight 2022 NTR MEdia
      </Typography>
      </Box>
      <Box p={2} sx ={{ overflowY: 'auto', height:'90vh', flex:2 }}>
        <Typography variant='h4'
        fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style = {{color:'#F31503'}}>videos</span>
        </Typography>
        
        <Videos videos= {[]} />
      </Box>
    </Stack>
  )
}

export default Feed