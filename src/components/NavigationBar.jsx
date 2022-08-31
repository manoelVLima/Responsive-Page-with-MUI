import { LightMode, Mail, ModeNight, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Typography} from '@mui/material'
import React, { useState } from 'react'
import { Icons, Search, StyledToolBar, UserBox} from '../styles/NavigationBar'


function NavigationBar({mode,setMode}) {
  const [open, setOpen ] = useState(false);
  return (
    <AppBar position="fixed">
      <StyledToolBar>
        <Typography variant="h6" sx={{display: {xs: 'none', sm: 'block'}}}>
          MATERIAL UI
        </Typography>
        <Pets sx={{display: {xs: 'block', sm: 'none'}}} />
        <Search>
          <InputBase sx={{color:'black'}} placeholder="Search..."/>
        </Search>
        {
          mode === 'light' ? <LightMode onClick={() => setMode('dark')}/> : <ModeNight onClick={() => setMode('light')} />
        }
        <Icons>
          <Badge badgeContent={4} color="primary">
            <Mail/>
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Notifications/>
          </Badge>
          <Avatar onClick= {()=> setOpen(true) } sx={{ bgcolor: '#999'}}>MJ</Avatar>
        </Icons>
        <UserBox>
          <Avatar onClick= {()=> setOpen(true) } sx={{ bgcolor: '#999'}}>MJ</Avatar>
          <Typography>
            Manoel
          </Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavigationBar
