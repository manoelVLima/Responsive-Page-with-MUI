import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Stack, styled, TextField, Tooltip, Typography} from '@mui/material'
import React, { useState } from 'react'
import { StyledModal } from '../styles/Add'
function AddBtn() {
  const [open, setOpen] = useState(false);

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
  < >
    <Tooltip onClick={() => setOpen(true)} title="New Post" sx={{ position: "fixed", bottom: 20,
    }}>
      <Fab color="primary">
          <Add />
      </Fab>    
    </Tooltip>
    <StyledModal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box bgcolor={"background.default"} color={"text.primary"} width={600} height={350} p={3} borderRadius={5}>
      <Typography variant="h5" color="gray" textAlign="center">
        Create a new post
      </Typography>
      <UserBox>
        <Avatar
          src=""
          alt="MJ"
          sx={{ width: 35, height: 35 }}
        >
          MJ
        </Avatar>
        <Typography fontWeight={500} variant="span">
          Manoel Lima
        </Typography>
      </UserBox>
      <TextField
          sx={{width: '100%'}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="What's on your mind?"
          variant="standard"
      />
      <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotions sx={{cursor: 'pointer'}} color="primary" />
        <Image sx={{cursor: 'pointer'}} color="secondary" />
        <VideoCameraBack sx={{cursor: 'pointer'}} color="success" />
        <PersonAdd sx={{cursor: 'pointer'}} color="error" />
      </Stack>
      <ButtonGroup
        sx={{borderRadius: 8}}
        fullWidth
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>Post</Button>
        <Button sx={{ width: "100px" }}>
          <DateRange />
        </Button>
      </ButtonGroup>
    </Box>
    </StyledModal>
  </>
  )
}

export default AddBtn
