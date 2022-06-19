import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import {useDispatch, useSelector  } from 'react-redux'
import Layout from '../components/Layout'
import {Box, Container, Typography, Button, CircularProgress} from '@mui/material'
import Image from 'next/image'
import Input from '../components/Input'
import { checkEmail, checkPassword } from '../helper/validator'
import registerAction from '../redux/actions/auth/register'
import loginAction from '../redux/actions/auth/login'

const Register = () => {
  const [errMessage, setErrMessage] = useState('')
  const [dataLogin, setDataLogin] = useState({})
  const dispatch = useDispatch()
  const {register} = useSelector(state => state)
  const route = useRouter()

  useEffect(() => {
    if (register.isSuccess) {
      route.push('/login')
      const {email, password} = dataLogin
      dispatch(loginAction(email, password))
    }
  }, [register])

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      route.push('/')
    }
  }, [])

  const handleRegister = (e) => {
    e.preventDefault()
    setErrMessage('')

    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    let err

    if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
      setErrMessage('Name must be string')
      err = true
    }
    if (!checkEmail(email)) {
      setErrMessage('Email not valid')
      err = true
    }
    if (!age) {
      setErrMessage('Age can not empty')
    }
    if (!checkPassword(password)) {
      setErrMessage('Password must be at least 6 characters, uppercase and lowercase')
      err = true
    }
    if (password !== confirmPassword) {
      setErrMessage('Password and confirm password did not match')
      err = true
    }
    if (!err) {
      dispatch(registerAction(firstName, lastName, age, email, password))
      setDataLogin({email, password})
    }
  }

  return (
    <Layout title='Register'>
      <Box
        sx={{
          position: 'relative',
          height: '100%',
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
            {(errMessage || register.isError) && <Typography variant='h5' component='h2' color='secondary' textAlign='center'>{errMessage || register.results}</Typography>}
            <Box sx={{textAlign: 'center', my: 3}}>
              {register.isLoading
                ? <Button variant='contained' onClick={handleRegister} sx={{width: '50%', height: '50px', fontWeight: '600'}}>
                  <CircularProgress sx={{color: 'white'}} />
                </Button>
                : <Button variant='contained' onClick={handleRegister} sx={{width: '50%', height: '50px', fontWeight: '600'}}>Register</Button>
              }
            </Box>
          </Container>
        </Container>
      </Box>
    </Layout>
  )
}

export default Register
