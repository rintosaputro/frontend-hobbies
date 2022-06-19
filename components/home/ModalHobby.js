import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import {Modal, Box, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material'
import Input from '../Input'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#222f3e',
  color: 'white',
  border: '2px solid #222f3e',
  boxShadow: 24,
  p: 4,
}

const ModalHobby = ({open, handleClose, label, activeHobby, addHobby}) => {
  const [isActive, setIsActive] = useState('')
  const [inputValue, setInputValue] = useState()

  const handleChangeSelect = (event) => {
    setIsActive(event.target.value)
  }

  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    alert(`${activeHobby} '${inputValue}'`)
  }
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {addHobby ? 'Add New Hobby' : 'Edit Hobby'}
          </Typography>
          <Box>
            <Input id='editHobby' label={label} fullWidth={true} onChange={handleChangeInput} />
            <FormControl fullWidth sx={{my: 3}}>
              {
                addHobby 
                  ? <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Active</InputLabel>
                  : <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>{activeHobby ? 'Active' : 'Not Active'}</InputLabel>
              }
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={isActive}
                label="Age"
                onChange={handleChangeSelect}
                sx={{border: '1px solid teal', color: 'white'}}
              >
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={0}>Not Active</MenuItem> 
              </Select>
            </FormControl>
            {addHobby
              ? <Button variant='contained' onClick={handleEdit} fullWidth>Add Hobby</Button>
              : <Button variant='contained' onClick={handleEdit} fullWidth>Update</Button> 
            }
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalHobby
