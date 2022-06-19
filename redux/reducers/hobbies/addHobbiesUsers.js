import constant from '../../constant'

const {ADD_HOBBY_USER} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const addHobbiesUsers = (state = intialState, action) => {
  switch (action.type) {
  case `${ADD_HOBBY_USER}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${ADD_HOBBY_USER}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${ADD_HOBBY_USER}_ERR`: {
    return {
      ...state,
      isError: true,
      results: action.payload
    }
  }
  case `${ADD_HOBBY_USER}_CLEAR`: {
    return {...intialState}
  }
  default: {
    return {...state}
  }
  }
}

export default addHobbiesUsers
