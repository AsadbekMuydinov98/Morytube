import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard, ChannelCard, Loader} from '../'

const Videos = ({videos}) => {
  if(!videos.length) return <Loader />
  return (
    <Box 
      width={"100%"} 
      gap={1}
      display='grid'
      gridTemplateColumns='repeat(4, 1fr)'
    >
      {videos.map(item=>(
        <Stack key={item.id.videoId} >
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard video={item}/>}
        </Stack>
      ))}
    </Box>
  )
}

export default Videos