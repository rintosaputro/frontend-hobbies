import constant from '../../constant'

const {AUTH_LOGIN, AUTH_CLEAR} = constant

const intialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  results: {}
}

const login = (state = intialState, action) => {
  switch (action.type) {
  case `${AUTH_LOGIN}_LOADING`: {
    return {
      ...state,
      isLoading: true
    }
  }
  case `${AUTH_LOGIN}`: {
    window.localStorage.setItem('token', action.payload.token)
    return {
      ...state,
      isSuccess: true,
      results: action.payload
    }
  }
  case `${AUTH_LOGIN}_ERR`: {
    return {
      ...state,
      isError: true,
      results: action.payload
    }
  }
  case `${AUTH_CLEAR}`: {
    return {
      ...intialState
    }
  }
  default: {
    return {...state}
  }
  }
}

export default login

// import caseType from '../../const'

// const {AUTH_LOGIN, AUTH_CLEAR} = caseType

// const intialState = {
//   isLoading: false,
//   isSuccess: false,
//   isError: false,
//   results: {}
// }

// const login = (state = intialState, action) => {
//   switch (action.type) {
//   case 'AUTH_LOGIN_LOADING': {
//     return {
//       ...state,
//       isLoading: true
//     }
//   }
//   case 'AUTH_LOGIN': {
//     return {
//       ...state,
//       isSuccess: true,
//       results: action.payload
//     }
//   }
//   case 'AUTH_LOGIN_ERR': {
//     return {
//       ...state,
//       isError: true,
//       results: action.payload
//     }
//   }
//   case 'AUTH_CLEAR': {
//     return {
//       ...state
//     }
//   }
//   default: {
//     return {...state}
//   }
//   }
// }

// export default login
