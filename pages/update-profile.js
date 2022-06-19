import { Box, Container, Typography, Button, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemText } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import Input from '../components/Input'

const UpdateProfile = () => {
  const results = {id: 4, firstName: 'jon', lastName: 'Saputri', age: 26, email: 'test@mail.com'}
  const hobbies = [
    {id: 1, hobby: 'fishing', usersHobbies: {id: 3, isActive: true, userId: 1, hobbyId: 1}},
    {id: 2, hobby: 'cycling', usersHobbies: {id: 5, isActive: true, userId: 1, hobbyId: 2}},
    {id: 3, hobby: 'reading', usersHobbies: {id: 7, isActive: false, userId: 1, hobbyId: 3}},
    {id: 4, hobby: 'fishing', usersHobbies: {id: 3, isActive: true, userId: 1, hobbyId: 1}},
    {id: 5, hobby: 'cycling', usersHobbies: {id: 5, isActive: true, userId: 1, hobbyId: 2}},
    {id: 6, hobby: 'reading', usersHobbies: {id: 7, isActive: false, userId: 1, hobbyId: 3}},
    {id: 7, hobby: 'fishing', usersHobbies: {id: 3, isActive: true, userId: 1, hobbyId: 1}},
    {id: 8, hobby: 'cycling', usersHobbies: {id: 5, isActive: true, userId: 1, hobbyId: 2}},
    {id: 9, hobby: 'reading', usersHobbies: {id: 7, isActive: false, userId: 1, hobbyId: 3}}
  ]
  const curretHobbies = [
    {id: 1, hobby: 'fishing', usersHobbies: {id: 3, isActive: true, userId: 1, hobbyId: 1}},
    {id: 2, hobby: 'cycling', usersHobbies: {id: 5, isActive: true, userId: 1, hobbyId: 2}},
    {id: 3, hobby: 'reading', usersHobbies: {id: 7, isActive: false, userId: 1, hobbyId: 3}}
  ]
  const {firstName, lastName, age, email} = results

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
            <Input id='firstName' label={firstName} fullWidth={true} />
            <Input id='lastName' label={lastName} fullWidth={true} />
            <Input id='age' label={age} fullWidth={true} type='number' />
            <Input id='email' label={email} fullWidth={true} type='email' />
            <Input id='password' label='Password' fullWidth={true} type='password' />
            <Input id='confirmPassword' label='Confirm Password' fullWidth={true} type='password' />
            <Typography variant='p' component='p' color='common.white' sx={{mt: 4}}>Your Hobbies: </Typography>
            <List sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
              {curretHobbies.map(({id, hobby}) => (
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
                {hobbies.map(data => (
                  <MenuItem value={data.id} key={data.id}>{data.hobby}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{textAlign: 'center', my: 5}}>
              <Button variant='contained' sx={{width: '50%', height: '50px', fontWeight: '600'}}>Update</Button>
            </Box>
          </Container>
        </Container>
      </Box>
    </Layout>
  )
}

export default UpdateProfile
