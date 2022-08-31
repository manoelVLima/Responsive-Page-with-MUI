import { Box, styled, Toolbar } from "@mui/material";

export const StyledToolBar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
})
export const Search = styled('div')(({theme}) => ({
  background: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'

}))


export const Icons = styled(Box)(({theme}) => ({
  padding: '0 10px',
  display: 'none',
  alignItems:'center',
  justifyContent: 'center',
  gap: 10,
  [theme.breakpoints.up('sm')]: {
    display:'flex',
  }

}))

export const UserBox = styled(Box)(({theme}) => ({
  display: 'none',
  alignItems:'center',
  justifyContent: 'center',
  gap: 10,
  [theme.breakpoints.down('sm')]: {
    display:'flex'
  }
}))