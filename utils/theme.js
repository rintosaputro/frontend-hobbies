import { red, teal } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const base = createTheme({
  palette: {
    primary: {
      main: '#F54768',
    },
    secondary: {
      main: '#339476',
    },
    dark: {
      main: '#000'
    },
    error: {
      main: red[400]
    }, 
    success: {
      main: teal[500]
    }
  },
})

const theme = responsiveFontSizes(base)

export default theme
