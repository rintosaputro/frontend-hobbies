import constant from '../../constant'

const {EDIT_USER_HOBBY} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const editUserHobby = (state = intialState, action) => {
  switch (action.type) {
  case `${EDIT_USER_HOBBY}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${EDIT_USER_HOBBY}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${EDIT_USER_HOBBY}_ERR`: {
    return {
      ...state,
      isError: true,
      results: action.payload
    }
  }
  case `${EDIT_USER_HOBBY}_CLEAR`: {
    return {
      ...intialState
    }
  }
  default: {
    return {...state}
  }
  }
}

export default editUserHobby
