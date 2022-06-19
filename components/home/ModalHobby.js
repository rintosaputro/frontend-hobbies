import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import {Modal, Box, FormControl, InputLabel, Select, MenuItem, CircularProgress, Button} from '@mui/material'
import Input from '../Input'
import editUserHobbyAction from '../../redux/actions/hobby/editUserHobby'
import getHobbyByNameAction from '../../redux/actions/hobby/getHobbyByName'
import addHobbyAction from '../../redux/actions/hobby/addHobby'
import { getProfile } from '../../redux/actions/profile/profile'
import addHobbyUserAction from '../../redux/actions/hobby/addHobbiesUsers'

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
  const [isAddHobby, setIsAddHobby] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const dispatch = useDispatch()
  const {getHobbyByName, addHobby: addHobbyState, editUserHobby, addHobbiesUsers} = useSelector(state => state)

  useEffect(() => {
    if (getHobbyByName.isError && inputValue) {
      dispatch(addHobbyAction(inputValue))
    }
  }, [getHobbyByName.isError])

  useEffect(() => {
    const {id, isActive} = dataChange
    if (getHobbyByName.isSuccess && inputValue) {
      dispatch(editUserHobbyAction(id, isActive, getHobbyByName.results[0]?.id))
    } 
  }, [getHobbyByName.isSuccess])

  useEffect(() => {
    const {id} = dataChange
    if (addHobbyState.isSuccess && isEdit) {
      dispatch(editUserHobbyAction(id, dataChange.isActive, addHobbyState.results.id))
      setIsEdit(false)
    }
    if (addHobbyState.isSuccess && isAddHobby) {
      dispatch(addHobbyUserAction(addHobbyState.results.id, isActive))
      alert(isActive)
    }
  }, [addHobbyState.isSuccess])

  useEffect(() => {
    if (editUserHobby.isSuccess) {
      dispatch(getProfile)
      setTimeout(() => {
        dispatch({
          type: 'EDIT_USER_HOBBY_CLEAR'
        })
      }, 7000)
    } 
  }, [editUserHobby.isSuccess])

  useEffect(() => {
    if (addHobbiesUsers.isSuccess) {
      dispatch(getProfile)
      setIsAddHobby(false)
      setTimeout(() => {
        dispatch({
          type: 'ADD_HOBBY_USER_CLEAR'
        })
      }, 7000)
    }
  }, [addHobbiesUsers.isSuccess])

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
    
    dispatch({type: 'GET_HOBBY_NAME_CLEAR'})
    dispatch({type: 'ADD_HOBBY_CLEAR'})
  
    if ((inputValue === label && activeHobby === isActive) || (!onChange)) {
      err = true
      setErrMessage('No data changed')
    }
    if (!err) {
      setIsEdit(true)
      if (inputValue) {
        dispatch(getHobbyByNameAction(inputValue))
        setDataChange({id, isActive, hobbyId})
      }
      if (!inputValue) {
        dispatch(editUserHobbyAction(id, isActive, hobbyId))
      }
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch({type: 'ADD_HOBBY_CLEAR'})

    let err
    setErrMessage('')

    if (!inputValue) {
      setErrMessage('Hobby can not be empty')
      err = true
    }
    if (inputValue && !err) {
      dispatch(addHobbyAction(inputValue))
      setIsAddHobby(true)
      alert(isActive)
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
                  ? <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Not Active</InputLabel>
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
                <MenuItem value={0}>Not Active</MenuItem> 
                <MenuItem value={1}>Active</MenuItem>
              </Select>
            </FormControl>
            {errMessage && <Typography variant='h5' component={'p'} color='secondary' textAlign={'center'} sx={{mb: 2}}>{errMessage}</Typography>}
            {(addHobbiesUsers.isSuccess || editUserHobby.isSuccess) && <Typography variant='h5' component={'p'} textAlign={'center'} sx={{mb: 2}}>Successfully {editUserHobby.isSuccess ? 'Edited' : 'Added'}</Typography>}
            {
              (getHobbyByName.isLoading || addHobbyState.isLoading || editUserHobby.isLoading) 
                ? <Button variant='contained' sx={{width: '50%', height: '50px', fontWeight: '600'}}>
                  <CircularProgress sx={{color: 'white'}} />
                </Button>
                : (addHobby
                  ? <Button variant='contained' onClick={handleAdd} fullWidth>Add Hobby</Button>
                  : <Button variant='contained' onClick={handleEdit} fullWidth>Update</Button>)
            }
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalHobby
