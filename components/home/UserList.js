import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import React from 'react'
import {useRouter} from 'next/router'

const UserList = ({users}) => {

  const route = useRouter()

  const handleUserDetail = (id, e) => {
    e.preventDefault()
    route.push(`users/${id}`)
  }

  return (
    <Box sx={{color: 'white', textAlign: 'center', mt: 5}}>
      <Typography variant='h3' component='h1' fontWeight='600' color='common.white' textAlign={'center'} sx={{mb: 5}}>User List</Typography>
      <List>
        {users?.map(data => (
          <ListItem
            key={data.id}
            onClick={(e) => handleUserDetail(data.id, e)}
            sx={{
              background: 'rgba(236, 240, 241,0.25)', 
              borderRadius: '10px', 
              my: 2, 
              cursor: 'pointer',
              ':hover': {
                background: 'rgba(52, 231, 228,0.3)'
              }
            }}
            secondaryAction={
              <IconButton edge='end' aria-label='detail user'>
                <ArrowRightAltIcon color='primary' sx={{fontSize: '30px'}} />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{bgcolor: 'rgba(0, 210, 211,0.5)'}}>
                <PersonIcon color='black' />
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={`Name: ${data.firstName} ${data.lastName}`} 
              secondary={`Age: ${data.age}`}
              secondaryTypographyProps={{sx: {color: '#c7ecee'}}}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default UserList
