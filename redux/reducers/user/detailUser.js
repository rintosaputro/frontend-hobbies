import constant from '../../constant'

const {GET_DETAIL_USER} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const detailUser = (state = intialState, action) => {
  switch (action.type) {
  case `${GET_DETAIL_USER}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${GET_DETAIL_USER}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${GET_DETAIL_USER}_ERR`: {
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

export default detailUser
