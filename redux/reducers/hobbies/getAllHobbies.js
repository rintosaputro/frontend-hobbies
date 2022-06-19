import constant from '../../constant'

const {GET_HOBBIES} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const getHobbies = (state = intialState, action) => {
  switch (action.type) {
  case `${GET_HOBBIES}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${GET_HOBBIES}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${GET_HOBBIES}_ERR`: {
    return {
      ...state,
      isError: true,
      results: action.payload
    }
  }
  default: {
    return {...state}
  }
  }
}

export default getHobbies
