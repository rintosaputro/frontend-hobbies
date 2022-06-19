import http from '../../../helper/helper'
import constant from '../../constant'
const {UPDATE_PROFILE} = constant

const updateProfileAction = (dataInput) => (
  async (dispatch) => {
    try {
      const param = new URLSearchParams()

      for (let key in dataInput) {
        if (dataInput[key]) {
          param.append(`${key}`, dataInput[key])
        }
      }
  
      const token = window.localStorage.getItem('token')
      const {data} = await http(token).patch('/users/profile', param)
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

export default updateProfileAction
