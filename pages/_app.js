/* eslint-disable no-unused-vars */
import {ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from '../utils/theme'
import '../styles/globals.css'

import { Provider, useDispatch } from 'react-redux'
import store from '../redux/store'
import { useEffect } from 'react'

const MyComponent = ({children}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    // if (token) {

    // }
  }, [])

  return <>{children}</>
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MyComponent>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MyComponent>
    </Provider>
  )
}

export default MyApp
