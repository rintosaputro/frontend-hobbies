import { Box, Container, Typography, Button, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import React, {useState} from 'react'
import Layout from '../components/Layout'
import Input from '../components/Input'
import { checkEmail, checkPassword } from '../helper/validator'

const UpdateProfile = () => {
  const [errMessage, setErrMessage] = useState('')
  const {profile, hobbiesList} = useSelector(state => state)

  const handleUpdate = (e) => {
    e.preventDefault()

    const {results} = profile

    let err
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    if (firstName && !/^[A-Za-z]+$/.test(firstName) && firstName === results.firstName) {
      setErrMessage('Fist name must be string')
      err = true
    }
    if (lastName && !/^[A-Za-z]+$/.test(lastName) && lastName === results.lastName) {
      setErrMessage('Last name must be string')
      err = true
    }
    if (!checkEmail(email)) {
      setErrMessage('Email not valid')
      err = true
    }
    if (password && !checkPassword(password)) {
      setErrMessage('Passw')
      err = true
    }
    if (password !== confirmPassword) {
      setErrMessage('Password must be at least 6 characters, uppercase and lowercase')
      err = true
    }
    if (!err) {
      console.log('tes')
    }
    console.log(firstName, lastName, age, email)
  }

  return (
    <Layout title='Update Profile'>
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
          <Typography variant='h3' component='h1' fontWeight='600' color='common.white' textAlign='center' sx={{mb: 5}}>Edit Profile</Typography>
          <Container maxWidth='sm'>
            <Input id='firstName' label={profile.results?.firstName} fullWidth={true} />
            <Input id='lastName' label={profile.results?.lastName} fullWidth={true} />
            <Input id='age' label={profile.results?.age} fullWidth={true} type='number' />
            <Input id='email' label={profile.results?.email} fullWidth={true} type='email' />
            <Input id='password' label='Password' fullWidth={true} type='password' />
            <Input id='confirmPassword' label='Confirm Password' fullWidth={true} type='password' />
            <Typography variant='p' component='p' color='common.white' sx={{mt: 4}}>Your Hobbies: </Typography>
            <List sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
              {profile.results?.hobbies.map(({id, hobby}) => (
                <ListItem key={id} sx={{width: 'fit-content'}}>
                  <ListItemText sx={{color: 'white'}}>{hobby},</ListItemText>
                </ListItem>
              ))}
            </List>
            <FormControl fullWidth sx={{mt: 1}}>
              <InputLabel id='selectIdLabel' sx={{color: 'white'}}>Add another hobby</InputLabel>
              <Select
                labelId='selectIdLabel'
                id='selectId'
                label='Add another hobby'
                sx={{bgcolor: 'rgba(236, 240, 241, 0.2)', color: 'white'}}
                // onChange={}
              >
                {hobbiesList.results?.map(data => (
                  <MenuItem value={data.id} key={data.id}>{data.hobby}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{textAlign: 'center', my: 5}}>
              <Button variant='contained' sx={{width: '50%', height: '50px', fontWeight: '600'}} onClick={handleUpdate}>Update</Button>
            </Box>
          </Container>
        </Container>
      </Box>
    </Layout>
  )
}

export default UpdateProfile
