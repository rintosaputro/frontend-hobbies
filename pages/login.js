import { Box, Button, CircularProgress, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useRouter} from 'next/router'
import Input from '../components/Input'
import Layout from '../components/Layout'
import loginAction from '../redux/actions/auth/login'
import { checkEmail } from '../helper/validator'
import { getProfile } from '../redux/actions/profile/profile'

const Login = () => {
  const [errMessage, setErrMessage] = useState('')

  const dispatch = useDispatch()
  const route = useRouter()
  const {login} = useSelector(state => state)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      route.push('/')
    }
  }, [])
  
  useEffect(() => {
    if (login.isSuccess) {
      dispatch(getProfile)
      route.push('/')
    }
  }, [login])

  const handleLogin = (e) => {
    e.preventDefault()
    let err
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    if (!checkEmail(email)) {
      setErrMessage('Email not valid')
      err = true
    }
    if (!password) {
      setErrMessage('Please enter password')
      err = true
    }
    if (!err) {
      dispatch(loginAction(email, password))
    }
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
            {(login.isError || errMessage) && <Typography variant='h5' component={'p'} color='secondary' textAlign={'center'}>{login.results || errMessage}</Typography>}
            <Input id='email' label='Email' fullWidth={true} type='email' />
            <Input id='password' label='Password' fullWidth={true} type='password' />
            <Box sx={{textAlign: 'center', my: 3}}>
              {login.isLoading 
                ? <Button variant='contained' sx={{width: '50%', height: '50px', fontWeight: '600'}}>
                  <CircularProgress sx={{color: 'white'}} />
                </Button>
                : <Button variant='contained' onClick={handleLogin} sx={{width: '50%', height: '50px', fontWeight: '600'}}>Login</Button>
              }
            </Box>
          </Container>
        </Container>
      </Box>
    </Layout>
  )
}

export default Login
