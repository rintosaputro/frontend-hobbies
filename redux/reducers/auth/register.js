import constant from '../../constant'
const {AUTH_REGISTER} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const register = (state = intialState, action) => {
  switch (action.type) {
  case `${AUTH_REGISTER}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${AUTH_REGISTER}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${AUTH_REGISTER}_ERR`: {
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

export default register
