import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ListHobby from '../../components/ListHobby'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import detailUserAction from '../../redux/actions/user/detailUser'

const UserDetail = () => {
  const route = useRouter()
  const dispatch = useDispatch()

  const user = useSelector(state => state.detailUser.results)

  useEffect(() => {
    const {id} = route.query
    dispatch(detailUserAction(id))
  }, [])

  return (
    <Layout title={`${user.firstName} ${user.lastName}`}>
      <Box 
        sx={{
          position: 'relative',
          height: '100%',
          minHeight: '700px',
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
              <Typography variant='h3' component='h1' fontWeight='600' color='common.white' textAlign={'center'} sx={{mb: 5}}>{`${user.firstName} ${user.lastName}`}</Typography>
              {user.hobbies?.length > 0 
                ? <ListHobby hobbies={user.hobbies} />
                : <Typography variant='h3' component='h2' fontWeight='bold' color='common.white' textAlign='center'>Hobby is Empty</Typography>
              }
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default UserDetail
