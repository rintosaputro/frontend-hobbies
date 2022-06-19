import http from '../../../helper/helper'
import constant from '../../constant'
const {ADD_HOBBY} = constant

const addHobbyAction = (hobby) => (
  async (dispatch) => {
    try {
      const param = new URLSearchParams()
      param.append('hobby', hobby)

      const token = window.localStorage.getItem('token')

      const {data} = await http(token).post('hobbies', param)

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


export default addHobbyAction
