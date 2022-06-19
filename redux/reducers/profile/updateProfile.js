import constant from '../../constant'

const {UPDATE_PROFILE} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const getProfile = (state = intialState, action) => {
  switch (action.type) {
  case `${UPDATE_PROFILE}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${UPDATE_PROFILE}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${UPDATE_PROFILE}_ERR`: {
    return {
      ...state,
      isError: true,
      results: action.payload
    }
  }
  case `${UPDATE_PROFILE}_CLEAR`: {
    return {...intialState}
  }
  default: {
    return {...state}
  }
  }
}

export default getProfile
