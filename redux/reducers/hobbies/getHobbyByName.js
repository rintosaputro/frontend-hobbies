import constant from '../../constant'

const {GET_HOBBY_NAME} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const getHobbyByName = (state = intialState, action) => {
  switch (action.type) {
  case `${GET_HOBBY_NAME}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${GET_HOBBY_NAME}`: {
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${GET_HOBBY_NAME}_ERR`: {
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

export default getHobbyByName
