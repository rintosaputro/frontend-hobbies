const intialState = {
  isSuccess: false
}

const logout = (state = intialState, action) => {
  switch (action.type) {
  case 'AUTH_LOGOUT': {
    return {...state, isSuccess: true}
  }
  case 'AUTH_LOGOUT_CLEAR': {
    return {...intialState}
  }
  default: {
    return {...state}
  }
  }
}

export default logout
