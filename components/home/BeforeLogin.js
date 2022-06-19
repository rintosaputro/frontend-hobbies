import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {useRouter} from 'next/router'

const BeforeLogin = () => {
  const route = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    route.push('/login')
  }

  const handleRegister = (e) => {
    e.preventDefault()
    route.push('/register')
  }

  return (
    <Box 
      sx={{
        position: 'relative',
        height: '100vh',
        '&::after': {
          position: 'absolute',
          content: '""',
          background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 48%, rgba(254,254,254,0) 100%)',
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
        <Typography variant='h3' component='h1' fontWeight='600' color='common.white' sx={{mb: 5}}>Welcome to our group.</Typography>
        <Typography variant='h4' component='p' color='common.white' sx={{mt: 5, pt: 5}}>Let`s go deeper</Typography>
        <Grid container spacing={2} sx={{mt: 2}}>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Button variant='outlined' onClick={handleLogin} sx={{padding: '15px 0', fontWeight: '600'}} fullWidth>Login</Button>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Button variant='contained' onClick={handleRegister} sx={{padding: '15px 0', fontWeight: '600'}} fullWidth>Register</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default BeforeLogin
