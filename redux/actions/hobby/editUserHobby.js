import http from '../../../helper/helper'
import constant from '../../constant'
const {EDIT_USER_HOBBY} = constant

const editUserHobbyAction = (id, isActive, hobbyId) => (
  async (dispatch) => {
    try {
      const param = new URLSearchParams()
      param.append('isActive', isActive)
      param.append('hobbyId', hobbyId)

      const token = window.localStorage.getItem('token')

      const {data} = await http(token).patch(`/users-hobbies/${id}`, param)

      dispatch({
        type: EDIT_USER_HOBBY,
        payload: data.results
      })
    }
    catch (err) {
      dispatch({
        type: `${EDIT_USER_HOBBY}_ERR`,
        payload: err.response?.data.message
      })
    }
  }
)


export default editUserHobbyAction
