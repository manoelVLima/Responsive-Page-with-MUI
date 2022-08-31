import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

function Posts(img) {
  return (
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#0099DD' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Manoel V.L Junior"
        subheader="September 01, 2022"
      />
      <CardMedia
        component="img"
        height="10%"
        width='50%'
        image={img.img}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt similique architecto, esse quae laborum, expedita sint nulla eos sit possimus dolor reprehenderit necessitatibus deleniti, quisquam accusantium asperiores itaque incidunt. Voluptatum?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Posts
