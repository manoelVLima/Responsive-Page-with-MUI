import { Box } from '@mui/material'
import React from 'react'
import Posts from './Posts'

function Feed() {
  return (
    <Box p={2} flex={3} sx={{marginRight: 20}}>
      <Posts img="https://source.unsplash.com/random/450x450?r=213"/>
      <Posts img="https://source.unsplash.com/random/450x450?r=21" />
      <Posts img="https://source.unsplash.com/random/450x450?r=67" />
      <Posts img="https://source.unsplash.com/random/450x450?r=19" />
      <Posts img="https://source.unsplash.com/random/450x450?r=57" />
    </Box>
  )
}

export default Feed
