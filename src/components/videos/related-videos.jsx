import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard, ChannelCard, Loader} from '../'

const RelatedVideos = ({videos}) => {
  if(!videos.length) return <Loader />
  return (
    <Box 
      width={"100%"} 
      gap={2}
      display='grid'
      gridTemplateColumns='repeat(1, 1fr)'
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

export default RelatedVideos