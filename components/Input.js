import React from 'react'
import { TextField } from '@mui/material'

const Input = ({id, label, type, fullWidth, onChange}) => {
  return (
    <TextField 
      id={id} 
      label={label} 
      variant='outlined' 
      type={type}
      fullWidth={fullWidth ? true : false} 
      onChange={onChange}
      sx={{
        bgcolor: 'rgba(236, 240, 241, 0.2)', 
        my: 1, 
        borderRadius: '5px'
      }} 
      InputLabelProps={{style: {color: '#fff'}}} 
      inputProps={{style: {color: '#fff'}}} />
  )
}

export default Input
