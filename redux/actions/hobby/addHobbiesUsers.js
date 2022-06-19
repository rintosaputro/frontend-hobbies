import http from '../../../helper/helper'
import constant from '../../constant'
const {ADD_HOBBY} = constant

const addHobbyUserAction = (hobbyId, isActive) => (
  async (dispatch) => {
    try {
      const param = new URLSearchParams()
      param.append('hobbyId', hobbyId)
      param.append('isActive', isActive)

      const token = window.localStorage.getItem('token')

      const {data} = await http(token).post('users-hobbies', param)

      dispatch({
        type: ADD_HOBBY,
        payload: data.results
      })
    }
    catch (err) {
      dispatch({
        type: `${ADD_HOBBY}_ERR`,
        payload: err.response?.data.message
      })
    }
  }
)


export default addHobbyUserAction
