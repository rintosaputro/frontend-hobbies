import constant from '../../constant'

const {ADD_HOBBY} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const addHobby = (state = intialState, action) => {
  switch (action.type) {
  case `${ADD_HOBBY}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${ADD_HOBBY}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${ADD_HOBBY}_ERR`: {
    return {
      ...state,
      isError: true,
      results: action.payload
    }
  }
  case `${ADD_HOBBY}_CLEAR`: {
    return {
      ...intialState
    }
  }
  default: {
    return {...state}
  }
  }
}

export default addHobby
