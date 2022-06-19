import constant from '../../constant'

const {GET_PROFILE} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const getProfile = (state = intialState, action) => {
  switch (action.type) {
  case `${GET_PROFILE}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${GET_PROFILE}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${GET_PROFILE}_ERR`: {
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

export default getProfile
