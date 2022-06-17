import Head from 'next/head'
import React from 'react'
import { Box } from '@mui/material'

const Layout = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title ? `Nomina - ${title}` : 'Nomina'}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        {children}
      </Box>
    </>
  )
}

export default Layout
