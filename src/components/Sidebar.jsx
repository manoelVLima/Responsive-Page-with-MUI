import { Accessibility, AccountCircle, AnalyticsRounded, Apps, Drafts, Home, Inbox, LocalGroceryStore, ModeNight, Pets } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

function Sidebar({mode, setMode}) {
  return (
    <Box p={2} flex={1} sx={{ display: { xs: "none", sm: "block",}}}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Apps />
              </ListItemIcon>
              <ListItemText primary="Apps" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalGroceryStore />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Accessibility />
              </ListItemIcon>
              <ListItemText primary="Accessibility" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AnalyticsRounded />
              </ListItemIcon>
              <ListItemText primary="Statistics" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={(event) => setMode(mode === 'light' ? 'dark' : 'light')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box> 
    </Box>
  )
}

export default Sidebar
