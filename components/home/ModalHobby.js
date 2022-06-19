import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import {Modal, Box, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material'
import Input from '../Input'
import editUserHobbyAction from '../../redux/actions/hobby/editUserHobby'
import getHobbyByNameAction from '../../redux/actions/hobby/getHobbyByName'
import addHobbyAction from '../../redux/actions/hobby/addHobby'

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

const ModalHobby = ({id, open, handleClose, label, activeHobby, hobbyId, addHobby}) => {
  const [isActive, setIsActive] = useState('')
  const [inputValue, setInputValue] = useState()
  const [onChange, setOnChange] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  const [dataChange, setDataChange] = useState({})

  const dispatch = useDispatch()
  const {getHobbyByName} = useSelector(state => state)

  // useEffect(() => {
  //   const {id, isActive, hobbyId} = dataChange
  //   if (!getHobbyByName.isError) {
  //     dispatch(editUserHobbyAction(id, isActive, hobbyId))
  //   } else {
  //     dispatch(addHobbyAction(inputValue))
  //   }
  // }, [getHobbyByName.isError])

  const handleChangeSelect = (event) => {
    setIsActive(event.target.value)
    setOnChange(true)
  }

  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
    setOnChange(true)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    setErrMessage('')
    let err
    alert(isActive)
  
    if ((inputValue === label && activeHobby === isActive) || (!onChange)) {
      err = true
      setErrMessage('No data changed')
    }
    if (!err) {
      if (inputValue) {
        dispatch(getHobbyByNameAction(inputValue))
        setDataChange({id, isActive, hobbyId})
      }
      if (!inputValue) {
        dispatch(editUserHobbyAction(id, isActive, hobbyId))
      }
    }
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
            {errMessage && <Typography variant='h5' component={'p'} color='secondary' textAlign={'center'} sx={{mb: 2}}>{errMessage}</Typography>}
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
