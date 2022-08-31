import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box p={2} flex={1} sx={{display: { xs: "none", sm: "block",}}}>
      <Box sx={{marginTop: 7}} position="fixed">
        <Typography variant="h6" fontWeight={200} >
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/7.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200} >
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={10}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={200} mt={2} mb={2} >
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar
