import React from 'react'
import Layout from '../components/Layout'
import {Box, Container, Typography, Button} from '@mui/material'
import Image from 'next/image'
import Input from '../components/Input'

const Register = () => {
  return (
    <Layout title='Register'>
      <Box
        sx={{
          position: 'relative',
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
        <Container maxWidth='md' sx={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', zIndex: 2, padding: '90px 0'}}>
          <Typography variant='h3' component='h1' fontWeight='600' color='common.white' textAlign='center' sx={{mb: 5}}>Register Your Account</Typography>
          <Container maxWidth='sm'>
            <Input id='firstName' label='First Name' fullWidth={true} />
            <Input id='lastName' label='Last Name' fullWidth={true} />
            <Input id='age' label='age' fullWidth={true} type='number' />
            <Input id='email' label='Email' fullWidth={true} type='email' />
            <Input id='password' label='Password' fullWidth={true} type='password' />
            <Input id='confirmPassword' label='Confirm Password' fullWidth={true} type='password' />
            <Box sx={{textAlign: 'center', my: 3}}>
              <Button variant='contained' sx={{width: '50%', height: '50px', fontWeight: '600'}}>Register</Button>
            </Box>
          </Container>
        </Container>
      </Box>
    </Layout>
  )
}

export default Register
