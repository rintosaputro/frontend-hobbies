import http from '../../../helper/helper'
import constant from '../../constant'
const {GET_PROFILE} = constant

export const getProfile = async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token')
    const {data} = await http(token).get('/users/profile')
    dispatch({
      type: GET_PROFILE,
      payload: data.results
    })
  }
  catch (err) {
    dispatch({
      type: `${GET_PROFILE}_ERR`,
      payload: err.response?.data.message
    })
  }
}
