import http from '../../../helper/helper'
import constant from '../../constant'

const {AUTH_LOGIN, AUTH_CLEAR} = constant

const loginAction = (email, password) => {
  return async (dispatch) => {
    dispatch({
      type: AUTH_CLEAR
    })
    try {
      const param = new URLSearchParams()
      param.append('email', email)
      param.append('password', password)

      const {data} = await http().post('/auth/login', param)
      dispatch({
        type: AUTH_LOGIN,
        payload: data.results
      })
    } 
    catch (err) {
      dispatch({
        type: `${AUTH_LOGIN}_ERR`,
        payload: err.response?.data.message
      })
    }
  }
}

export default loginAction
