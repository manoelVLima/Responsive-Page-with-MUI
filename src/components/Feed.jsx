import { Box, styled } from '@mui/material'
import React from 'react'
import Posts from './Posts'

function Feed() {
  const StyledBox = styled(Box)(({theme}) => ({
    padding: 2,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    }
  }))
  return (
    <StyledBox p={2} flex={2}>
      <Posts img="https://source.unsplash.com/random/450x450?r=213"/>
      <Posts img="https://source.unsplash.com/random/450x450?r=21" />
      <Posts img="https://source.unsplash.com/random/450x450?r=67" />
      <Posts img="https://source.unsplash.com/random/450x450?r=19" />
      <Posts img="https://source.unsplash.com/random/450x450?r=57" />
    </StyledBox>
  )
}

export default Feed
