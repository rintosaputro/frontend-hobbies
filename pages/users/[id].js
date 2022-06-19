import React from 'react'
import Layout from '../../components/Layout'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ListHobby from '../../components/ListHobby'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const UserDetail = () => {
  const results = {
    id: 1,
    firstName: 'Rinto',
    lastName: 'Saputro',
    age: 26
  }
  const hobbies = [
    {id: 1, hobby: 'fishing', usersHobbies: {id: 3, isActive: true, userId: 1, hobbyId: 1}},
    {id: 2, hobby: 'cycling', usersHobbies: {id: 5, isActive: true, userId: 1, hobbyId: 2}},
    {id: 3, hobby: 'reading', usersHobbies: {id: 7, isActive: false, userId: 1, hobbyId: 3}}
  ]

  return (
    <Layout title={`${results.firstName} ${results.lastName}`}>
      <Box 
        sx={{
          position: 'relative',
          height: '100vh',
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
          <Link href='/'>
            <a className='back'>
              <ArrowBackIcon sx={{mr: 3, fontWeight: 'bold'}} />
              Back
            </a>
          </Link>
          <Grid container justifyContent={'center'}>
            <Grid item xs={12} sm={8} md={6}>
              <Typography variant='h3' component='h1' fontWeight='600' color='common.white' textAlign={'center'} sx={{mb: 5}}>{`${results.firstName} Hobby List`}</Typography>
              <ListHobby hobbies={hobbies} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default UserDetail
