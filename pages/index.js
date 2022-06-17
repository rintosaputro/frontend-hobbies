import { Button } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <>
      <Button variant='contained' href='/login'>Login</Button>
      <Button variant='outlined' href='/register'>Register</Button>
    </>
  )
}
