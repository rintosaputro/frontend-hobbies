import { Box, Typography, List, ListItem, Avatar, IconButton, ListItemAvatar, Grid } from '@mui/material'
import SkateboardingIcon from '@mui/icons-material/Skateboarding'
// import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'
import React, { useState } from 'react'
import ModalHobby from './home/ModalHobby'

const ListHobby = ({hobbies, profile}) => {
  const [open, setOpen] = useState(false)
  const [labelEdit, setLabelEdit] = useState('')
  const [hobbyId, setHobbyId] = useState()
  const [isActive, setIsActive] = useState()
  const [idItem, setId] = useState()

  const handleOpen = (label, idHobby, activeHobby, id) => {
    setOpen(true)
    setLabelEdit(label)
    setIsActive(activeHobby)
    setHobbyId(idHobby)
    setId(id)
  }

  const handleClose = () => setOpen(false)

  return (
    <>
      <ModalHobby open={open} handleClose={handleClose} label={labelEdit} activeHobby={isActive} hobbyId={hobbyId} id={idItem} />
      <List>
        {hobbies?.map((data) => {
          const {usersHobbies} = data
          return (
            <ListItem
              sx={{background: 'rgba(236, 240, 241,0.25)', borderRadius: '10px', my: 2}}
              key={usersHobbies.id}
              secondaryAction={
                profile && <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleOpen(data.hobby, usersHobbies.hobbyId, usersHobbies.isActive, usersHobbies.id)}>
                    <ModeEditOutlineIcon color='primary' />
                    <Typography component='p' color='common.white' sx={{mx: 1, fontSize: '15px'}}>
                      Edit
                    </Typography>
                  </IconButton>
                </Box>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{bgcolor: 'rgba(0, 0, 0,0.6)'}}>
                  <SkateboardingIcon color='primary' />
                </Avatar>
              </ListItemAvatar>
              <Grid 
                container 
                sx={{color: 'white', mx: 1}}
              >
                <Grid item xs={12} display='flex' flexDirection='row'>
                  <Typography component='p' variant='h5' color='white'>{data.hobby}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography component='p' variant='p' color={usersHobbies.isActive ? 'primary' : 'secondary'}>{usersHobbies.isActive ? 'Active' : 'Not Active'}</Typography>        
                </Grid>
              </Grid>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default ListHobby
