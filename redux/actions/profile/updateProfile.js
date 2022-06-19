import http from '../../../helper/helper'
import constant from '../../constant'
const {UPDATE_PROFILE} = constant

export const getProfile = (dataInput) => (
  async (dispatch) => {
    try {
      const param = new URLSearchParams()
  
      dataInput.forEach(value => param.append(`${value}`, value))
  
      const token = window.localStorage.getItem('token')
      const {data} = await http(token).get('/users/profile')
      dispatch({
        type: UPDATE_PROFILE,
        payload: data.results
      })
    }
    catch (err) {
      dispatch({
        type: `${UPDATE_PROFILE}_ERR`,
        payload: err.response?.data.message
      })
    }
  }
)
