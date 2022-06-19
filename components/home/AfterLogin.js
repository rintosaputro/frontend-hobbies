import { Box, Container, Typography,  Grid, Button } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import {useRouter} from 'next/router'
import ListHobby from '../ListHobby'
import ModalHobby from './ModalHobby'
import UserList from './UserList'

const AfterLogin = () => {
  const hobbies = [
    {id: 1, hobby: 'fishing', usersHobbies: {id: 3, isActive: true, userId: 1, hobbyId: 1}},
    {id: 2, hobby: 'cycling', usersHobbies: {id: 5, isActive: true, userId: 1, hobbyId: 2}},
    {id: 3, hobby: 'reading', usersHobbies: {id: 7, isActive: false, userId: 1, hobbyId: 3}}
  ]
  const [open, setOpen] = useState(false)

  const route = useRouter()

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)
  const handleUpdateProfile = (e) => {
    e.preventDefault()
    route.push('/update-profile')
  }

  return (
    <>
      <ModalHobby open={open} handleClose={handleCloseModal} label='Your Hobby' addHobby={true} />
      <Box 
        sx={{
          position: 'relative',
          height: '100%',
          '&::after': {
            position: 'absolute',
            content: '""',
            background: 'rgba(0,0,0,0.7)',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
          }
        }}
      >
        <Image
          src='/images/home-bg.jpg'
          layout='fill'
          objectFit='cover'
          alt='Background Home'
        />
        <Container sx={{position: 'relative', padding: '90px 10px', height: '100%', zIndex: 2}}>
          <Grid container justifyContent={'center'}>
            <Grid item xs={12} sm={8} md={6}>
              <Typography variant='h3' component='h1' fontWeight='600' color='common.white' textAlign={'center'} sx={{mb: 5}}>Hobby List</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                  <Button variant='contained' onClick={handleOpenModal} sx={{fontWeight: 'bold'}} fullWidth>Add new hobby</Button>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Button variant='outlined' sx={{color: '#48dbfb'}} onClick={handleUpdateProfile} fullWidth>Update profile</Button>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Button variant='contained' color='secondary' onClick={handleUpdateProfile} fullWidth>Log out</Button>
                </Grid>
              </Grid>
              <ListHobby hobbies={hobbies} profile={true} />
            </Grid>
          </Grid>
          <Grid container justifyContent={'center'}>
            <Grid item xs={12} sm={8} md={6}>
              <UserList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default AfterLogin
