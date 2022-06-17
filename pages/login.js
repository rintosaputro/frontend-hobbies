import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Input from '../components/Input'
import Layout from '../components/Layout'

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    alert(`${email} dan ${password}`)
  }
  return (
    <Layout title='Login'>
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          '&::after': {
            position: 'absolute',
            content: '""',
            background: 'rgba(0, 0, 0, 0.6)',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
          }
        }}
      >
        <Image 
          src='/images/auth-bg.jpg'
          layout='fill'
          objectFit='cover'
          alt='Background Auth Page'
        />
        <Container maxWidth='md' sx={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', zIndex: 2}}>
          <Typography variant='h3' component='h1' fontWeight='600' color='common.white' textAlign='center' sx={{mb: 5}}>Login to Your Account</Typography>
          <Container maxWidth='sm'>
            <Input id='email' label='Email' fullWidth={true} type='email' />
            <Input id='password' label='Password' fullWidth={true} type='password' />
            <Box sx={{textAlign: 'center', my: 3}}>
              <Button variant='contained' onClick={handleLogin} sx={{width: '50%', height: '50px', fontWeight: '600'}}>Login</Button>
            </Box>
          </Container>
        </Container>
      </Box>
    </Layout>
  )
}

export default Login
