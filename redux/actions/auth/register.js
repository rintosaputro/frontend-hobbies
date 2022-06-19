import http from '../../../helper/helper'
import constant from '../../constant'
const {AUTH_REGISTER, AUTH_CLEAR} = constant

const registerAction = (firstName, lastName, age, email, password) => (
  async (dispatch) => {
    dispatch({
      type: AUTH_CLEAR
    })
    try {
      const param = new URLSearchParams()
      param.append('firstName', firstName)
      param.append('lastName', lastName)
      param.append('age', age)
      param.append('email', email)
      param.append('password', password)

      const {data} = await http().post('/auth/register', param)

      dispatch({
        type: AUTH_REGISTER,
        payload: data.results
      })
    }
    catch (err) {
      dispatch({
        type: `${AUTH_REGISTER}_ERR`,
        payload: err.response?.data.message
      })
    }
  } 
)

export default registerAction
