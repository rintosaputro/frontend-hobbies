import { red, teal } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const base = createTheme({
  palette: {
    secondary: {
      main: '#F54768',
    },
    primary: {
      main: '#00d2d3',
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
