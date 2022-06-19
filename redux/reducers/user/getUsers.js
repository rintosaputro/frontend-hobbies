import constant from '../../constant'

const {GET_USERS} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const getUsers = (state = intialState, action) => {
  switch (action.type) {
  case `${GET_USERS}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${GET_USERS}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${GET_USERS}_ERR`: {
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

export default getUsers
